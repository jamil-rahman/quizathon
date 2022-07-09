import React, { useContext, useEffect, useState } from "react";
import ScoreContext from "../../ScoreContext";
import useWindowDimensions from "../../Custom Hooks/useWindowSize";
import Confetti from "react-confetti";
import styles from "./Result.module.css";

export default function Result() {
  const { score, userName } = useContext(ScoreContext);
  const { height, width } = useWindowDimensions();
  const [scoreArray, setScoreArray] = useState([]);
 // const [sum,setSum] = useState(0);

// const totalSum = scoreArray.map((score)=>
//   setSum(sum+score)
// )

 console.log(scoreArray)
//console.log(typeof(scoreArray));
var sum=0;

//console.log(sumValues);

  useEffect(() => {
   setScoreArray(JSON.parse(localStorage.getItem('Score_Array')))  
  }, [])
  

  return (
    <div className={styles.result_container}>
      <Confetti width={width} height={height} />
      <p className={styles.text}>Congratulations {userName}! You scored {score} {score>1?`points!`:`point`}</p>
      <button className={styles.btn}><i class="fa fa-undo" aria-hidden="true"></i><span>Try Again</span></button>

      <div className={styles.statistics_container}>
        <div className={styles.header}>
        <h3>Your Statistics</h3>
        </div>
         <ul>
          <li>Top Score: </li>
          <li>Total Quizzes given: {scoreArray.length} </li>
          <li>Total Score: {}</li>
        </ul>
      </div>
    </div>
  );
}
