import React, { useState, useEffect } from 'react';
import Api from 'youtube-browser-api';
import axios from "axios";

function Explore({ mainVideoId }) {
  const [transcript, setTranscript] = useState(null);
  const [summary, setSummary] = useState(null);
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(false);
  const [summaryPrompt, setSummaryPrompt] = useState('');
  const [quizPrompt, setQuizPrompt] = useState('');

  const handleButtonClick = () => {
    Api.transcript.GET({
      query: {
        videoId: mainVideoId,
      },
    }).Ok((res) => setTranscript(res.body));
  };

  const handleSummary = () => {
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
    setLoading(true);
    const quizPromptValue = `provide a mcq quiz with five questions based on the text key values  ${JSON.stringify(transcript)} done`;
    setQuizPrompt(quizPromptValue);
    axios
      .post("http://localhost:8080/chat", { prompt: quizPromptValue })
      .then((res) => {
        setQuiz(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err)
        setLoading(false);
      });
  };

  return (
    <>
      <div className='text-4xl font-bold text-center p-5'>
        Explore
      </div>
      <button className='border border-black' onClick={handleButtonClick}>Load Transcript</button>
      {transcript && (
        <div>
          <p>{JSON.stringify(transcript.videoId.map)}</p>
          <button className='border border-black' onClick={handleSummary}>Summarize</button>
          {loading && <p>Loading summary...</p>}
          {summary && !loading && (
            <div>
              <h2>Summary:</h2>
              <p>{JSON.stringify(summary)}</p>
            </div>
          )}
          <button className='border border-black' onClick={handleQuiz}>Generate Quiz</button>
          {loading && <p>Loading quiz...</p>}
          {quiz && !loading && (
            <div>
              <h2>Quiz:</h2>
              <p>{JSON.stringify(quiz)}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Explore;


