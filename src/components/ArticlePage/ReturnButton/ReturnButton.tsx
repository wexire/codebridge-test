import { Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { arrowIcon } from "../../../assets";
import styles from "./ReturnButton.module.scss";

const ReturnButton = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.returnButton} onClick={() => navigate("/")}>
      <img src={arrowIcon} alt="arrowIcon" className={styles.returnIcon} />
      <Typography variant="h3">Back to homepage</Typography>
    </div>
  );
};

export default ReturnButton;
