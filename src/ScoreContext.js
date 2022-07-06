import React, { createContext, useState } from "react";
const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
    const [score, setScore] = useState(0)
    const [userName, setUserName] = useState("");
    // const [userStats, setUserStats] = useState({
    //   username: "",
    //   score: null
    // })
    const addScore = () => setScore(score + 1);
    const decreaseScore = () => setScore(score - 10);
    
    const saveNameInLocalStorage = (name) =>{
      localStorage.setItem('Name', name);
    }

  return <ScoreContext.Provider value={{addScore, score, decreaseScore, saveNameInLocalStorage}}>{children}</ScoreContext.Provider>;
};

export default ScoreContext