import React, { useEffect, useRef, memo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./styles.module.css";

import PropTypes from "prop-types";

const ProgressBar = ({ totalQuestion }) => {
  return <>progress</>;
};

ProgressBar.propTypes = {
  totalQuestion: PropTypes.number,
};

ProgressBar.defaultProps = {
  totalQuestion: 0,
};
export default memo(ProgressBar);
