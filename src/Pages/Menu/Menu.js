import React, { useCallback } from "react";
import styles from "./style.module.css";
import icons from "~/Common/icons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const MenuHeading = ({ switchTheme }) => {
  return (
    <div className={styles.menu_intro}>
      <h1 className={switchTheme()}>
        Welcome to the
        <span>Mind Bender !</span>
      </h1>
      <p className={switchTheme()}>Pick a subject to get started</p>
    </div>
  );
};

const MenuButtonHandler = ({ switchTheme, handleSubject }) => {
  return (
    <>
      <button
        type="button"
        data-subject="HTML"
        className={switchTheme()}
        onClick={handleSubject}
      >
        <div className={styles.subject_icon}>
          <img src={icons["HTML"]} alt="HTML ICON" loading="lazy" />
        </div>
        HTML
      </button>
      <button
        type="button"
        className={switchTheme()}
        onClick={handleSubject}
        data-subject="CSS"
      >
        <div className={styles.subject_icon}>
          <img src={icons["CSS"]} alt="CSS icon" />
        </div>
        CSS
      </button>
      <button
        type="button"
        className={switchTheme()}
        onClick={handleSubject}
        data-subject="Javascript"
      >
        <div className={styles.subject_icon}>
          <img src={icons["Javascript"]} alt="javascript icon" />
        </div>
        Javascript
      </button>
      <button
        type="button"
        className={switchTheme()}
        onClick={handleSubject}
        data-subject="Accessibility"
      >
        <div className={styles.subject_icon}>
          <img src={icons["Accessibility"]} alt="accessibility icon" />
        </div>
        Accessibility
      </button>
    </>
  );
};

const Menu = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const switchTheme = useCallback(() => {
    if (theme === "light") {
      return styles.light;
    }

    return styles.dark;
  }, [theme]);

  const handleSubject = useCallback(
    (event) => {
      const subject = event.target.getAttribute("data-subject");

      dispatch({ type: "START_QUIZ", subject });
      navigate(`quiz/:${subject}`);
    },
    [navigate, dispatch]
  );

  return (
    <section className={styles.menu}>
      <MenuHeading switchTheme={switchTheme} />
      <div className={styles.menu_subjects}>
        <MenuButtonHandler
          switchTheme={switchTheme}
          handleSubject={handleSubject}
        />
      </div>
    </section>
  );
};

export default Menu;
