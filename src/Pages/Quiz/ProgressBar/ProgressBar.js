import React, { useEffect, useRef, memo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

import PropTypes from "prop-types";

const ProgressBar = ({ totalQuestion }) => {
  const progressRef = useRef();
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme);
  const subject = useSelector((state) => state.quiz.subject);
  const currentQuestionNumber = useSelector(
    (state) => state.quiz.currentQuestionNumber
  );

  /* The `useEffect` hook in the provided code snippet is updating the width of the progress bar based on
the progress of the quiz. */
  useEffect(() => {
    progressRef.current.style.width = `${
      (currentQuestionNumber / totalQuestion) * 100
    }%`;

    if (currentQuestionNumber === totalQuestion - 1) {
      progressRef.current.style.backgroundColor = "#89d33396";
    }
  }, [currentQuestionNumber, totalQuestion]);

  /* The `useEffect` hook in the code snippet is used to perform side effects in a functional component.
In this case, the `useEffect` hook is checking if the `currentQuestionNumber` is equal to the
`totalQuestion`. If they are equal, it will navigate to the "/result" route using the `navigate`
function from the `react-router-dom` package. */
  useEffect(() => {
    if (currentQuestionNumber === totalQuestion) {
      navigate(`/results?subject=${subject}`);
    }
  }, [currentQuestionNumber, totalQuestion, navigate, subject]);

  return (
    <div
      className={
        theme === "light"
          ? [styles.quiz_progressBar, styles.light].join(" ")
          : [styles.quiz_progressBar, styles.dark].join(" ")
      }
    >
      <div ref={progressRef}></div>
    </div>
  );
};

ProgressBar.propTypes = {
  totalQuestion: PropTypes.number,
};

ProgressBar.defaultProps = {
  totalQuestion: 0,
};
export default memo(ProgressBar);
