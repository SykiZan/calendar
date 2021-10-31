import React from "react";
import Calendar from "../components/Calendar";
import classes from "../css/Main.module.css";

const Main = () => {
  return (
    <main className={classes.main}>
      <div className={classes["main-header"]}>
        <h1>Choose the day for the meeting</h1>
      </div>
      <div className={classes["main-paragraph"]}>
        <p>
          We encourage you to book your
          <br />
          appointment online.
          <br />
          This will save you time.
        </p>
      </div>
      <Calendar />
    </main>
  );
};

export default Main;
