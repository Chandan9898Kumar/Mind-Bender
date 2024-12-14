import React, { lazy, Suspense } from "react";
import styles from "./style.module.css";
const Subject = lazy(() => import("./Subject"));
const ThemeSwitch = lazy(() => import("./ThemeSwitch"));

const Header = () => {
  return (
    <header className={styles.header}>
      <Suspense fallback="Loading Component ...">
        <Subject />
        <ThemeSwitch />
      </Suspense>
    </header>
  );
};

export default Header;
