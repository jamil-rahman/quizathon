import React, { useContext, useState } from "react";
import ScoreContext from "../../ScoreContext";
import useWindowDimensions from "../../Custom Hooks/useWindowSize";
import Confetti from "react-confetti";
import styles from "./Result.module.css";
import { useNavigate } from "react-router-dom";

export default function Result() {
  const { score, userName, scoreArray, setQuestions } =
    useContext(ScoreContext);
  const { height, width } = useWindowDimensions();

  let navigate = useNavigate();

  const newArray = scoreArray.map((i) => Number(i));
  let max = Math.max(...newArray);
  let sum = newArray.reduce((partialSum, a) => partialSum + a, 0);

  return (
    <div className={styles.result_container}>
      <Confetti width={width} height={height} />.
      <p className={styles.text}>
        Congratulations {userName}! You scored {score}{" "}
        {score > 1 ? `points!` : `point`}
      </p>
      <button
        className={styles.btn}
        onClick={() => {
          console.log("test runs");
          setQuestions();
          navigate("/quiz");
        }}
      >
        <i className="fa fa-undo" aria-hidden="true"></i>
        <span>Try Again</span>
      </button>

      <div className={styles.statistics_container}>
        <div className={styles.header}>
          <h3>All Time Statistics</h3>
        </div>
        <ul>
          <li>Total Quizzes attempted: {scoreArray.length} </li>
          <li>Score Accumulated: {sum} </li>
          <li>Max score in a single run: {max} </li>
        </ul>
      </div>
    </div>
  );
}
