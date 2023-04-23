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
          <button className='bg-gradient-to-r from-bele2 to-bele1 hover:bg-gradient-to-r hover:from-cyan-700 hover:to-indigo-900 box-shadow hover:focus:shadow-none text-white focus:text-2xl py-4 px-6 rounded-full' onClick={handleButtonClick}>AI Assist</button>
        </div>
      )}
      
      {transcript && (
        <div className='pt-10 px-4'>

          <Tabs >
            <TabList style={{borderColor:"black",borderBottomWidth:"3px",borderRadius:"10px"}} >
            <Tab style={{backgroundColor:"transparent",borderColor:"black",borderRadius:"10px",borderWidth:"3px"}}><span className='text-xl hover:text-blue-700' >Summary</span></Tab>
            <Tab style={{backgroundColor:"transparent",borderColor:"black",borderRadius:"10px",borderWidth:"3px"}}><span className='text-xl hover:text-blue-700'>Quiz</span></Tab>
            </TabList>

            <TabPanel>
            <div className='flex justify-center items-center h-fit py-10 px-6'>
              {buttonVisible > 0 && (
                <button className={`bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-gradient-to-r hover:from-cyan-700 hover:to-indigo-900 box-shadow hover:focus:shadow-none text-white text-2xl  py-5 px-5 rounded-full focus:text-4xl  opacity-${buttonVisible}`} onClick={handleSummary}>Summarize Content</button>
              )}
              {loading && 
                <div className=''>
                  <p className='text-center text-xl font-mono'>Generating...</p>
                  <img className="h-72 w-96 mr-50" src='images/rat.gif' alt='loading'/>
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
                <button className={`bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-gradient-to-r hover:from-cyan-700 hover:to-indigo-900 box-shadow hover:focus:shadow-none text-white text-2xl  py-5 px-5 rounded-full focus:text-4xl  opacity-${buttonQuiz}`} onClick={handleQuiz}>Generate Quiz</button>
              )}
              {loading && 
                <div className=''>
                  <p className='text-center text-xl font-mono'>Generating...</p>
                  <img className="h-72 w-90 mr-50" src='images/rat.gif' alt='loading'/>
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


