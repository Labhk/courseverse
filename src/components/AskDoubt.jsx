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
        <div align="center">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="font-semibold text-2xl" htmlFor="inline-full-name">
                Ask Your Doubt
              </label>
            </div>
            <div>
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className=" text-lg text-center
                border-b-2 border-blue-400
                focus:outline-none focus:border-green-400 m-4 p-1"
              />
            </div>
            <div>
              <button type="submit" className="m-3 border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded-full  hover:bg-blue-700 hover:text-white ">
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