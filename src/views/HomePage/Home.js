import { faker } from "@faker-js/faker";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ScoreContext from "../../ScoreContext";
import styles from "./Home.module.css";

export default function Home() {
  const randomName = faker.name.firstName();
  let navigate = useNavigate();
  const {saveNameInLocalStorage} = useContext(ScoreContext)
  
  useEffect(()=>{
    document.addEventListener('keydown',handleKeyDown, true)
  })

  const handleKeyDown = (e) => {                                                       
    e.key==="Enter"? navigate("/quiz",{replace: true}):  console.log("Enter not pressed")
    saveNameInLocalStorage(randomName);
  }

  const handleStart = () =>{
    saveNameInLocalStorage(randomName);
    navigate('/quiz');
  }

  return (
    <div className={styles.home}>
      <p>{randomName}, are you ready?</p>
      <span onClick={handleStart}>START!</span>
    </div>
  );
}
