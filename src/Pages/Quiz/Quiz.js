import React, { useState, useCallback, useEffect } from "react";
import styles from "./style.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import data from "./data";
import ProgressBar from "./ProgressBar";
const Quiz = () => {
  const theme = useSelector((state) => state.theme);
  const subject = useSelector((state) => state.quiz.subject);
  const currentQuestionNumber = useSelector(
    (state) => state.quiz.currentQuestionNumber
  );
  const [allQuestions, setAllQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const navigate = useNavigate();

  const switchTheme = useCallback(
    (className) => {
      if (theme === "light")
        return [className ? className : "", styles.light].join(" ");
      else return [className ? className : "", styles.dark].join(" ");
    },
    [theme]
  );

  /* These `useEffect` hooks in the React component are responsible for managing side effects in the
  component based on changes to specific dependencies. */
  useEffect(() => {
    data.quizzes.forEach((quiz) => {
      if (quiz.subject === subject) {
        setAllQuestions(quiz.questions);
      }
    });
  }, [subject]);

  useEffect(() => {
    setCurrentQuestion(allQuestions[currentQuestionNumber]);
  }, [allQuestions, currentQuestionNumber]);

  useEffect(() => {
    if (!subject) {
      navigate("/");
    }
  }, [subject, navigate]);



  return (
    <section className={styles.quiz}>
      {currentQuestion && (
        <>
          <div className={styles.quiz_question}>
            <h2 className={switchTheme()}>
              {`Question ${currentQuestionNumber + 1} of ${
                allQuestions.length
              }`}
            </h2>

            <h1 className={switchTheme()}>{currentQuestion?.question}</h1>
            <ProgressBar totalQuestion={allQuestions?.length} />
          </div>
        </>
      )}
    </section>
  );
};

export default Quiz;
