import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./style.css";

const lazyWithRetry = (componentImport) =>
  lazy(async () => {
    try {
      return await componentImport();
    } catch (error) {
      console.error(error);
      return window.location.reload();
    }
  });

const Header = lazyWithRetry(() => import("./Pages/Headers"));

const Menu = lazyWithRetry(() => import("./Pages/Menu"));

const Quiz = lazyWithRetry(() => import("./Pages/Quiz"));

const Result = lazyWithRetry(() => import("./Pages/Results"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback="Loading ...">
        <Header />
        <Routes>
          <Route exact path="/" element={<Menu />} />
          <Route exact path="/quiz" element={<Quiz />} />
          <Route exact path="result" element={<Result />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
