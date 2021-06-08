import React, { useEffect, useState } from "react";
import "./App.scss";
// eslint-disable-next-line no-unused-vars
import colorArray from "./color";
let quoteDBURL =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [quote, setQuote] = useState(
    "life is 10% what happens to me and 90% of how i react to it."
  );
  const [author, setauthor] = useState("Charles Swindoll");
  // eslint-disable-next-line no-unused-vars
  const [randomNumber, setrandomNumber] = useState(0);
  const [quotes, setquotes] = useState(null);
  const [accentcolor, setaccentcolor] = useState("#282c34");

  const fetchquotes = async (url) => {
    const response = await fetch(url);
    const parse = await response.json();
    setquotes(parse.quotes);
  };

  useEffect(() => {
    fetchquotes(quoteDBURL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quoteDBURL]);

  const generaterandomnumber = () => {
    let randomNumber = Math.floor(quotes.length * Math.random());
    setrandomNumber(randomNumber);
    setaccentcolor(colorArray[randomNumber]);
    setQuote(quotes[randomNumber].quote);
    setauthor(quotes[randomNumber].author);
  };

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: accentcolor }}>
        <div id="quote-box" style={{ backgroundcolor: accentcolor }}>
          {/* <h1> Random-Number: {randomNumber}</h1> */}
          <p id="text">"{quote}"</p>
          <p id="author">- {author}</p>

          <div class="button">
            <a
              id="tweet-quote"
              href={encodeURI(
                `http://www.twitter.com/intent/tweet?text=${quote} -${author}`
              )}
            >
              {" "}
              <i class="bi bi-twitter"> </i>
              <svg
                id="new-quote"
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                fill="currentColor"
                class="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>

            <button
              class="btn btn-default btn-primary"
              id="new-quote"
              onClick={() => generaterandomnumber()}
            >
              <em>New Quote</em>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
