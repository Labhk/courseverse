import axios from "axios";
import React,{ useState } from "react";

function AskDoubt() {

    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState("");

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
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="inline-full-name">
                ASK YOUR DOUBT
              </label>
            </div>
            <div>
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>
            <div>
              <button type="submit">
                Confirm
              </button>
            </div>
          </form>

          <div>
            <p className="">{JSON.stringify(response)}</p>
          </div>
        </div>
      </>
    )
}

export default AskDoubt;