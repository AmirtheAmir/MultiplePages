import React, { useState, useEffect } from "react";
import axios, { isCancel, AxiosError } from "axios";
import SecondStyle from './Secondel.module.css'
function Secondel() {
  const [currentText, setCurrentText] = useState("?");
  const [times, setTimes] = useState({});

  const getQuote = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        const answer = res.data.slip;
        console.log(answer.advice);
        setCurrentText(answer.advice);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const cities = {
      NYC: "America/New_York",
      LONDON: "Europe/London",
      SYDNEY: "Australia/Sydney",
      TOKYO: "Asia/Tokyo",
    };

    const updateTime = () => {
      const now = new Date();
      const updatedTimes = {};

      for (const city in cities) {
        const time = now.toLocaleTimeString("en-US", {
          timeZone: cities[city],
        });
        updatedTimes[city] = time;
      }

      setTimes(updatedTimes);
    };

    updateTime(); // Call once to set the First time
    const intervalId = setInterval(updateTime, 1000); // every second

    return () => clearInterval(intervalId); // To Clean
  }, []);

  return (
    <div className={SecondStyle.mainCont}>
      <div className={SecondStyle.searchBox}>
        <button  className={SecondStyle.searchBtn} onClick={getQuote}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={SecondStyle.searchLogo}
          >
            <path d="M10.362 1.093a.75.75 0 0 0-.724 0L2.523 5.018 10 9.143l7.477-4.125-7.115-3.925ZM18 6.443l-7.25 4v8.25l6.862-3.786A.75.75 0 0 0 18 14.25V6.443ZM9.25 18.693v-8.25l-7.25-4v7.807a.75.75 0 0 0 .388.657l6.862 3.786Z" />
          </svg>
          Test Your Luck Today
        </button>
      </div>
      <div  className={SecondStyle.textBox}>
        <span>{currentText}</span>
      </div>
      <div className={SecondStyle.clocks}>
        <ul>
          {Object.keys(times).map((city) => (
            <li key={city}>
              <span>{city}</span>
              <span className={SecondStyle.specificClocks}>{times[city]}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Secondel;
