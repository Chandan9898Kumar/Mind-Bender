import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import icons from "~/Common/icons";
import PropTypes from "prop-types";
import SubmitAnswer from "./SubmitAnswer";
const DisplayChoices = ({ choices, answer, totalQuestion }) => {
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
    allChoices.forEach((currentChoice) => {
      currentChoice.style.border = "";
      currentChoice.firstElementChild.style.backgroundColor = "";
      currentChoice.firstElementChild.style.color = "";
      currentChoice.lastElementChild.setAttribute("src", icons["transparent"]);
      currentChoice.style.pointerEvents = "";
    });

    allChoices.forEach((currentChoice) => {
      if (currentChoice.getAttribute("data-choice") === choice) {
        currentChoice.style.border = "3px solid #A729F5";
        currentChoice.firstElementChild.style.backgroundColor = "#A729F5";
        currentChoice.firstElementChild.style.color = "#FFF";
      }
    });
  }, [choice]);

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

      <SubmitAnswer choice={choice} setChoice={setChoice} ref={choiceRef} totalQuestion={totalQuestion} />
    </div>
  );
};

DisplayChoices.propTypes = {
  choices: PropTypes.array.isRequired,
  answer: PropTypes.string.isRequired,
  totalQuestion: PropTypes.number.isRequired,
};

DisplayChoices.defaultProps = {
  choices: [],
  answer: "",
  totalQuestion: 0,
};

export default memo(DisplayChoices);
