import React, { useState, useCallback, useEffect } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import data from "./data";
const Quiz = () => {
  const theme = useSelector((state) => state.quiz);

 
  return <div>Quiz</div>;
};

export default Quiz;
