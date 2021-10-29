import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import classes from "../css/PopUp.module.css";

const PopUp = () => {
  const dispatch = useDispatch();
  const date = useSelector((state) => state.date);
  const closeHandler = () => {
    dispatch({ type: "close" });
  };
  return (
    <div className={classes["pop-up"]}>
      <div className={classes.info}>
        <div className={`${classes.month} ${classes["info-block"]}`}>
          <label htmlFor="" className={classes.label}>
            Month
          </label>
          <input type="text" className={classes.input} value={date.month} />
        </div>
        <div className={`${classes.day} ${classes["info-block"]}`}>
          <label htmlFor="" className={classes.label}>
            Day
          </label>
          <input
            type="text"
            className={classes.input}
            value={`${date.date}, ${date.day}`}
          />
        </div>
      </div>
      <button className={classes.btn} onClick={closeHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="close-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default PopUp;
