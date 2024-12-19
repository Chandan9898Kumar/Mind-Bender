import React, { useEffect, useRef } from "react";
import style from "./style.module.css";
import icons from "~/Common/icons";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
const Subject = () => {
  const subject = useSelector((state) => state.quiz.subject);
  const theme = useSelector((state) => state.theme);
  const iconRef = useRef();
  const location = useLocation();
  const dispatch = useDispatch();
  const query = new URLSearchParams(location.search);
  const urlQueryParam = query.get("subject");

  useEffect(() => {
    if (!urlQueryParam) {
      dispatch({ type: "START_QUIZ", subject: "" });
    }
  }, [urlQueryParam, dispatch]);

  useEffect(() => {
    if (subject === "Accessibility") {
      iconRef.current.style.backgroundColor = "#F6E7FF";
    } else if (subject === "CSS")
      iconRef.current.style.backgroundColor = "#E0FDEF";
    else if (subject === "HTML")
      iconRef.current.style.backgroundColor = "#FFF1E9";
    else if (subject === "Javascript")
      iconRef.current.style.backgroundColor = "#EBF0FF";
  }, [subject]);

  return (
    <section className={style.subject}>
      {subject && (
        <>
          <div ref={iconRef} className={style.subject_icon}>
            <img src={icons[`${subject}`]} alt={subject} loading="lazy" />
          </div>
          <h1 className={theme === "light" ? style.light : style.dark}>
            {subject}
          </h1>
        </>
      )}
    </section>
  );
};

export default Subject;
