import { useContext, useState } from "react";
import Error from "../Error/Error";
import styles from "./Question.module.css";
import classNames from "classnames";
import ScoreContext from "../../ScoreContext";

export default function Question({
  currentQuestion,
  questions,
  choices,
  correct,
}) {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const { setScore, score } = useContext(ScoreContext);

  const handleChoice = (choice) => {
    //if choice is correct
    if (selected === choice && selected === correct) return styles.correct;
    //if choice is incorrect
    else if (selected === choice && selected !== correct)
      return styles.incorrect;
    //if incorrect choice is chosen and show the correct one
    else if (choice === correct) return styles.correct;
  };

  const handleMarking = (choice) => {
    setSelected(choice);
    if (choice === correct) setScore(score + 2);
    setError(false);
  };

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
                onClick={() => {}}
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
      </div>
    </div>
  );
}
