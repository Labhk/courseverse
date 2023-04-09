import React, { useState, useEffect } from 'react';
import Api from 'youtube-browser-api';
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Explore({ mainVideoId }) {
  const [transcript, setTranscript] = useState(null);
  const [summary, setSummary] = useState(null);
  const [quiz, setQuiz] = useState([]);
  const [loading, setLoading] = useState(false);
  const [summaryPrompt, setSummaryPrompt] = useState('');
  const [quizPrompt, setQuizPrompt] = useState('');
  const [showAssist, setShowAssist] = useState(true);
  const [buttonVisible, setButtonVisible] = useState(100);
  const [buttonQuiz, setButtonQuiz] = useState(100);


  useEffect(() => {
    setTranscript(null);
    setSummary(null);
    setQuiz([]);
    setShowAssist(true);
    setButtonVisible(100);
    setButtonQuiz(100);

  }, [mainVideoId]);


  const handleButtonClick = () => {
    setShowAssist(false);
    Api.transcript.GET({
      query: {
        videoId: mainVideoId,
      },
    }).Ok((res) => setTranscript(res.body));
  };

  const handleSummary = () => {
    setButtonVisible(0);
    setLoading(true);
    const summaryPromptValue = `Concate all the values of text keys and Summarize the content briefly${JSON.stringify(transcript)} done`;
    setSummaryPrompt(summaryPromptValue);
    axios
      .post("http://localhost:8080/chat", { prompt: summaryPromptValue })
      .then((res) => {
        setSummary(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err)
        setLoading(false);
      });
  };

  

  const handleQuiz = () => {
    setButtonQuiz(0);
    setLoading(true);
    const quizPromptValue = `provide a mcq quiz with five questions based on the text key values  ${JSON.stringify(transcript)} without answers`;
    setQuizPrompt(quizPromptValue);
    axios
      .post("http://localhost:8080/chat", { prompt: quizPromptValue })
      .then((res) => {
        setQuiz(res.data.split('Q').join(' ').split('\n').map(element => element.trim()).filter(Boolean).slice(0));
        console.log(quiz)
        setLoading(false);
      })
      .catch((err) => {
        console.error(err)
        setLoading(false);
      });
  };

  return (
    <>
      {showAssist && (
        <div className='text-3xl text-center p-5 '>
          <button className='bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:via-pink-500 hover:to-red-500 box-shadow text-white focus:text-4xl py-4 px-6 rounded-full' onClick={handleButtonClick}>AI Assist</button>
        </div>
      )}
      
      {transcript && (
        <div className='pt-10 px-4'>

          <Tabs >
            <TabList >
            <Tab><span className='text-xl hover:text-blue-500'>Summary</span></Tab>
            <Tab><span className='text-xl hover:text-blue-500'>Quiz</span></Tab>
            </TabList>

            <TabPanel>
            <div className='flex justify-center items-center h-fit py-10 px-6'>
              {buttonVisible > 0 && (
                <button className={`bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-indigo-500 hover:to-purple-500 text-white text-2xl  py-4 px-5 rounded-full focus:text-4xl box-shadow opacity-${buttonVisible}`} onClick={handleSummary}>Summarize Content</button>
              )}
              {loading && 
                <div className=''>
                  <p className='text-center text-xl font-mono'>Generating...</p>
                  <img className="h-60 w-60 mr-50" src='images/fireworks.gif' alt='loading'/>
                </div>
              }
              {summary && !loading && (
                <div className='text-justify'>
                  <h2 className='text-3xl font-semibold pb-3'>Summary:</h2>
                  <p className='italic text-xl '>{summary}</p>
                </div>
              )}
            </div>

            
            </TabPanel>
            <TabPanel>
            <div className='flex justify-center items-center h-fit py-10 px-6'>
              {buttonQuiz > 0 && (
                <button className={`bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-indigo-500 hover:to-purple-500 text-white text-2xl  py-4 px-5 rounded-full focus:text-4xl box-shadow opacity-${buttonQuiz}`} onClick={handleQuiz}>Generate Quiz</button>
              )}
              {loading && 
                <div className=''>
                  <p className='text-center text-xl font-mono'>Generating...</p>
                  <img className="h-60 w-60 mr-50" src='images/fireworks.gif' alt='loading'/>
                </div>
              }
              {quiz && !loading && (
                <div className='text-justify'>
                  
                  {quiz.map((question, index) => (
                    <div key={index}>
                      {index === 0 && <h2 className='text-3xl font-semibold pb-3'>Solve the Quiz:</h2>}
                      {index % 5 === 0 && <hr className='pb-4 border-none' />}
                      <p className='text-xl italic'>{question}</p>
                      
                    </div>
                  ))}
                </div>
              )}
            </div>
            </TabPanel>
        </Tabs>
        </div>
      )}
    </>
  );
}

export default Explore;


