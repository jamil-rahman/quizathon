import { useContext, useState } from "react";
import Error from "../Error/Error";
import styles from "./Question.module.css";
import classNames from "classnames";
import ScoreContext from "../../ScoreContext";
import { useNavigate } from "react-router-dom";
//import { Button } from "@mui/material";

export default function Question({
  currentQuestion,
  questions,
  choices,
  correctAnswer,
  setCurrentQuestion,
}) {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const { setScore, score } = useContext(ScoreContext);

  let navigate = useNavigate();

  const handleChoice = (choice) => {
    //if choice is correct
    if (selected === choice && selected === correctAnswer)
      return styles.correct;
    //if choice is incorrect
    else if (selected === choice && selected !== correctAnswer)
      return styles.incorrect;
    //if incorrect choice is chosen and show the correct one
    else if (choice === correctAnswer) return styles.correct;
  };

  const handleMarking = (choice) => {
    setSelected(choice);
    if (choice === correctAnswer) setScore(score + 1);
    
    if (currentQuestion > 8) {
      navigate("/result");
    } else {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setSelected();
      }, 1500);
      
    }

  };

  const handleSkip = () =>{
    if (currentQuestion > 8) {
      navigate("/result");
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelected();
    } 
  }

  return (
    <div className={styles.question_container}>
      <span className={styles.question_header}>
        Question No. {currentQuestion + 1}
      </span>

      <div className={styles.question}>
        <h3>{questions[currentQuestion].question}</h3>

        <div className={styles.choices_container}>
          {error && <Error>{error}</Error>}
          {choices &&
            choices.map((choice) => (
              <button
                onClick={() => handleMarking(choice)}
                className={classNames(
                  styles.choice,
                  selected && handleChoice(choice)
                )}
                key={choice}
                disabled={selected}
              >
                {choice}
              </button>
            ))}
        </div>

        <div className={styles.buttons_container}>
          {/* <div className={styles.buttons}>
            <button className={styles.button}>Previous</button>
            <button className={styles.button}>Next</button>
          </div> */}
          <button className={styles.submit_btn}>Submit</button>
          <span className={styles.skip} onClick={handleSkip}>Skip this question</span>
        </div>
      </div>
    </div>
  );
}
