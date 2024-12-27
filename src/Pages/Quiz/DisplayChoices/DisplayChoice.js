import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import styles from "./styles.module.css";

import { useSelector } from "react-redux";
import icons from "~/Common/icons";
import PropTypes from "prop-types";
const DisplayChoices = ({ choices, answer }) => {
  const theme = useSelector((state) => state.theme);

  const [choice, setChoice] = useState("");

  const choiceRef = useRef();

  const switchTheme = useCallback(
    (className) => {
      if (theme === "light")
        return [className ? className : "", styles.light].join(" ");
      else return [className ? className : "", styles.dark].join(" ");
    },
    [theme]
  );

  // This event handler will save a reference to the choice the user selected.
  const handleClick = (event) => {
    if (!event.target.matches("." + styles.quiz_answer)) {
      return;
    }
    const selectedChoice = event.target.getAttribute("data-choice");
    choiceRef.current = event.target;
    setChoice(selectedChoice);
  };

  // This useEffect will give a purple border to the choice that the user selected.
  useEffect(() => {
    const allChoices = document.querySelectorAll("." + styles.quiz_answer);
   
  }, [choice]);

  console.log(choices, answer);
  return (
    <div className={styles.quiz_answers} onClick={handleClick}>
      {choices?.map((option, index) => {
        const letter = (index + 10).toString(36).toUpperCase(); //  converting numbers to letters (1 --> a, 2 --> b, etc...)
        return (
          <button
            className={switchTheme(styles.quiz_answer)}
            type="button"
            aria-label="click-button"
            data-choice={letter}
            data-correct={option === answer}
            key={index}
          >
            <h3>{letter}</h3>
            <p className={switchTheme()}>{option}</p>
            <img
              className={styles.isCorrectIcon}
              src={icons["transparent"]}
              alt="option-icon"
              loading="lazy"
            />
          </button>
        );
      })}
    </div>
  );
};

DisplayChoices.propTypes = {
  choices: PropTypes.array.isRequired,
  answer: PropTypes.string.isRequired,
};

DisplayChoices.defaultProps = {
  choices: [],
  answer: "",
};

export default memo(DisplayChoices);
