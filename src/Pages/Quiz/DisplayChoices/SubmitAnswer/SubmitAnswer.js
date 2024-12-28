import React, { memo, useState, useRef, forwardRef } from "react";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import icons from "./icons";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
const SubmitAnswer = forwardRef(({ choice, setChoice, totalQuestion }, ref) => {
  const [nextQuestion, setNextQuestion] = useState(false);
  const theme = useSelector((state) => state.theme);
  const currentQuestionNumber = useSelector((state) => state.quiz.currentQuestionNumber);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();

  /**
   * The `handleNextQuestion` function resets the choice, hides the next question button, dispatches a
   * "NEXT_QUESTION" action, scrolls to the top of the window smoothly, and changes the text content of
   * the event target to "Submit Answer".
   * @param event - The `event` parameter in the `handleNextQuestion` function is an object that contains
   * information about the event that triggered the function. This object includes details such as the
   * type of event, the target element that triggered the event, and any additional event-specific
   * information. In this case, the event is
   */
  const handleNextQuestion = (event) => {
    setChoice("");
    setNextQuestion(false);
    dispatch({ type: "NEXT_QUESTION" });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    event.target.textContent = "Submit Answer";
  };

  //this handleSubmit event handler will give a green border to the user's choice if its correct
  //and an red border to the user's choice IF its incorrect

  /**
   * The handleSubmit function handles user choices in a quiz, updates the UI based on correctness, and
   * disables further interaction with choices.
   * @param event - The `event` parameter in the `handleSubmit` function is an object that represents the
   * event that occurred, such as a button click or form submission. In this function, it is used to
   * handle the submission of a choice in a quiz or questionnaire. The function checks if a choice has
   * been selected,
   * @returns The `handleSubmit` function returns early if `choice` is falsy, setting an error state and
   * scrolling to the bottom of the page. If `choice` is truthy, it sets the `nextQuestion` state to true
   * and updates the text content of the event target button based on the current question number. It
   * then proceeds to handle the styling and feedback for the selected choice, updating the UI
   */
  const handleSubmit = (event) => {
    if (!choice) {
      setIsError(true);
      const bodyHeight = document.querySelector("body").scrollHeight;
      window.scrollTo({
        top: bodyHeight,
        behavior: "smooth",
      });
      return;
    }

    setNextQuestion(true);

    if (currentQuestionNumber !== totalQuestion - 1) {
      event.target.textContent = "Next Question";
    } else {
      event.target.textContent = "Result";
    }
    const allChoices = document.querySelectorAll("button[data-choice]");
    const isCorrect = ref.current.getAttribute("data-correct") === "true";

    if (isCorrect) {
      ref.current.style.border = "3px solid #26D782";
      ref.current.firstElementChild.style.backgroundColor = "#26D782";
      ref.current.firstElementChild.style.color = "white";
      ref.current.lastElementChild.setAttribute("src", icons["correct"]);
      dispatch({ type: "UPDATE_SCORE" });
    } else {
      ref.current.style.border = "3px solid #EE5454";
      ref.current.firstElementChild.style.backgroundColor = "#EE5454";
      ref.current.firstElementChild.style.color = "white";
      ref.current.lastElementChild.setAttribute("src", icons["incorrect"]);
      allChoices.forEach((correctChoice) => {
        if (correctChoice.getAttribute("data-correct") === "true") {
          correctChoice.style.border = "3px solid #26D782";
          correctChoice.firstElementChild.style.backgroundColor = "#26D782";
          correctChoice.firstElementChild.style.color = "white";
          correctChoice.lastElementChild.setAttribute("src", icons["correct"]);
        }
      });
    }

    allChoices.forEach((choice) => {
      choice.style.pointerEvents = "none";
    });
  };

 
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
      {isError && (
        <Snackbar
          open={isError}
          autoHideDuration={3000}
          onClose={() => setIsError(false)}
        >
          <Alert
            onClose={() => setIsError(false)}
            severity="error"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Please Select An Answer ...
          </Alert>
        </Snackbar>
      )}
    </>
  );
});

export default memo(SubmitAnswer);
