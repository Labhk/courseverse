import axios from "axios";
import React,{ useState } from "react";

function AskDoubt() {

    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState();

    const handleSubmit = (e) => {
      e.preventDefault();

      axios
        .post("http://localhost:8080/chat", { prompt })
        .then((res) => {
          setResponse(res.data);
        })
        .catch((err) => {
          console.error(err)
        });
    };

    return (
      <>
        <div align="center ">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="font-thin text-3xl" htmlFor="inline-full-name">
                Ask Your Doubt
              </label>
            </div>
            <div>
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className=" text-lg text-center
                border-b-2 border-gray-900
                bg-transparent
                focus:outline-none focus:border-blue-700 m-4 p-1 "
              />
            </div>
            <div>
              <button type="submit" className="m-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-gradient-to-r hover:from-cyan-800 hover:to-indigo-900 box-shadow hover:focus:shadow-none px-4 py-2 text-white rounded-full text-xl  ">
                Ask Question
              </button>
            </div>
          </form>

          <div>
            <p className="m-3 italic text-2xl">{response}</p>
          </div>
        </div>
      </>
    )
}

export default AskDoubt;