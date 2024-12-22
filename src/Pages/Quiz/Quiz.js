import React, { useState, useCallback, useEffect } from "react";
import styles from "./style.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import data from "./data";
const Quiz = () => {
  const theme = useSelector((state) => state.theme);
  const subject = useSelector((state) => state.quiz.subject);
  const currentQuestionNumber = useSelector((state) => state.quiz.currentQuestionNumber);
  const [allQuestions, setAllQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!subject) {
      navigate("/");
    }
  }, [subject, navigate]);

  return <section className={styles.quiz}>Quiz</section>;
};

export default Quiz;
