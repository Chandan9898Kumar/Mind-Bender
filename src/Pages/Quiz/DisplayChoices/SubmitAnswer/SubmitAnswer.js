import React, { memo, useState, useRef, forwardRef } from "react";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import icons from "./icons";

const SubmitAnswer = forwardRef(({ choice, setChoice }, ref) => {
  const [nextQuestion, setNextQuestion] = useState(false);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleNextQuestion = () => {};

  const handleSubmit = () => {};

  return (
    <>
      <button
        type="button"
        aria-label="select-button"
        className={
          theme === "light"
            ? [styles.quiz_submit, styles.light].join(" ")
            : [styles.quiz_submit, styles.dark].join(" ")
        }
        onClick={nextQuestion ? handleNextQuestion : handleSubmit}
      >
        Submit Answer
      </button>
    </>
  );
});

export default memo(SubmitAnswer);
