import React, { memo, useState, useRef, forwardRef } from "react";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import icons from "./icons";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
const SubmitAnswer = forwardRef(({ choice, setChoice }, ref) => {
  const [nextQuestion, setNextQuestion] = useState(false);
  const theme = useSelector((state) => state.theme);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();

  const handleNextQuestion = () => {};

  const handleSubmit = () => {
    setIsError(true);
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
            Please select an answer ...
          </Alert>
        </Snackbar>
      )}
    </>
  );
});

export default memo(SubmitAnswer);
