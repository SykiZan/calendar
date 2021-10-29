import React from "react";
import PopUp from "./PopUp";
import classes from "../css/Backdrop.module.css";
const BackDrop = () => {
  return (
    <div className={classes.backdrop}>
      <PopUp />
    </div>
  );
};

export default BackDrop;
