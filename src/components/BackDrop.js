import React from "react";
import PopUp from "./PopUp";
import classes from "../css/Backdrop.module.css";
import { useDispatch } from "react-redux";
const BackDrop = () => {
  const dispatch = useDispatch();
  const closeHandler = () => {
    dispatch({ type: "close" });
  };
  return (
    <div className={classes.modal}>
      <PopUp />
      <div className={classes.backdrop} onClick={closeHandler}></div>
    </div>
  );
};

export default BackDrop;
