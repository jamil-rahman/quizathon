import React, { createContext, useState } from "react";
const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
    const [score, setScore] = useState(0)
    const addScore = () => setScore(score + 1);
    const decreaseScore = () => setScore(score - 10)
  return <ScoreContext.Provider value={{addScore, score, decreaseScore}}>{children}</ScoreContext.Provider>;
};

export default ScoreContext