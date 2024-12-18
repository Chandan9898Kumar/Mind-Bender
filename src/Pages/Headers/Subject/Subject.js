import React, { useEffect, useRef } from "react";
import style from "./style.module.css";
import icons from "~/Common/icons";
import { useSelector } from "react-redux";
const Subject = () => {
  const subject = "CSS";
  // const subject = useSelector(state => state.quiz.subject);
  const theme = useSelector((state) => state.theme);
  const iconRef = useRef();

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
      <div ref={iconRef} className={style.subject_icon}>
        <img src={icons[`${subject}`]} alt={subject} loading="lazy" />
      </div>
      <h1 className={theme === "light" ? style.light : style.dark}>
        {subject}
      </h1>
    </section>
  );
};

export default Subject;
