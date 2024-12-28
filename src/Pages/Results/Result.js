import React, { useRef, useEffect, useCallback } from "react";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import icons from "~/Common/icons";

const Result = () => {
  const theme = useSelector((state) => state.theme);
  const subject = useSelector((state) => state.quiz.subject);
  const score = useSelector((state) => state.quiz.score);

  const totalQuestions = useSelector(
    (state) => state.quiz.currentQuestionNumber
  );
  const dispatch = useDispatch();
  const subjectIconRef = useRef();
  const navigate = useNavigate();

  const switchTheme = useCallback(
    (className) => {
      if (theme === "light")
        return [className ? className : "", styles.light].join(" ");
      else return [className ? className : "", styles.dark].join(" ");
    },
    [theme]
  );

  useEffect(() => {
    if (!subject) {
      navigate("/");
    }
  }, [subject, navigate]);

  useEffect(() => {
    if(subject === 'HTML')
        subjectIconRef.current.style.backgroundColor = '#FFF1E9';
    else if (subject === 'CSS')
        subjectIconRef.current.style.backgroundColor = '#E0FDEF';
    else if(subject === 'Javascript')
        subjectIconRef.current.style.backgroundColor = '#EBF0FF';
    else
        subjectIconRef.current.style.backgroundColor = '#F6E7FF';
}, [subject])

  const handlePlayAgain = () => {
    navigate("/");
  };


  return (
    <section className={styles.results}>
      <div className={styles.results_intro}>
        <h1 className={switchTheme()}>Quiz Completed</h1>
        <h2 className={switchTheme()}>You Scored ...</h2>
      </div>

      <div className={styles.results_score}>
        <div className={switchTheme(styles.results_scoreBox)}>
          <h3 className={switchTheme(styles.results_subject)}>
            <div ref={subjectIconRef}>
              <img src={icons[subject]} alt={subject} loading="lazy" />
            </div>
            {subject}
          </h3>
          <h1 className={switchTheme(styles.results_finalScore)}>{score}</h1>

          <h4 className={switchTheme(styles.results_totalQuestions)}>
            Out Of {totalQuestions}
          </h4>
        </div>

        <button
          type="button"
          aria-label="play-again-button"
          className={styles.results_playAgain}
          onClick={handlePlayAgain}
        >
          {" "}
          Play Again
        </button>
      </div>
    </section>
  );
};

export default Result;
