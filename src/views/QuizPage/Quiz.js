import React, { useState, useEffect } from 'react'

export default function Quiz() {

  const [questions, setQuestions] = useState([])
  
  const fetchQuestions = async () => {
    const res = await fetch(`https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple`); 
    const data  = await res.json();
    console.log(data.results);
  }

  useEffect(() => {
    fetchQuestions()
  }, [])
  
  
  return (
    <div>Quiz</div>
  )
}
