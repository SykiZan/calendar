import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import classes from "../css/Calendar.module.css";

function Calendar() {
  const isClicked = useSelector((state) => state.isClicked);
  const dispatch = useDispatch();
  const clickHandler = (day) => {
    dispatch({
      type: "click",
      payload: {
        month: currentMonth,
        day: new Date(
          currentDateRaw.getFullYear(),
          currentDateRaw.getMonth(),
          day
        ).toLocaleString("en-us", {
          weekday: "long",
        }),
        date: day,
      },
    });
    setDayClicked(day);
  };
  const [dayClicked, setDayClicked] = useState("");
  const [currentDateRaw, setCurrentDateRaw] = useState(new Date()); // this date is determined based on selected month
  const todayRaw = new Date(); // real current date
  const today = new Date().getDate();
  const todayMonth = todayRaw.toLocaleString("en-us", {
    month: "long",
  });
  const todayYear = todayRaw.getFullYear();

  const currentMonth = currentDateRaw.toLocaleString("en-us", {
    month: "long",
  });
  const currentYear = currentDateRaw.getFullYear();
  const clickNextHandler = () => {
    const nextDate = new Date(
      currentDateRaw.getFullYear(),
      currentDateRaw.getMonth() + 1
    );
    setCurrentDateRaw(nextDate);
  };
  const clickPrevHandler = () => {
    const nextDate = new Date(
      currentDateRaw.getFullYear(),
      currentDateRaw.getMonth() - 1
    );
    setCurrentDateRaw(nextDate);
  };

  const firstDayWeek = new Date(
    currentDateRaw.getFullYear(),
    currentDateRaw.getMonth(),
    1
  ).getDay();

  const lastDayWeek = new Date(
    currentDateRaw.getFullYear(),
    currentDateRaw.getMonth() + 1,
    0
  ).getDay();
  const lastDayDate = new Date(
    currentDateRaw.getFullYear(),
    currentDateRaw.getMonth() + 1,
    0
  ).getDate();
  const prevLastDay = new Date(
    currentDateRaw.getFullYear(),
    currentDateRaw.getMonth(),
    0
  ).getDate();
  const prevDays = [];

  for (let i = 0; i < firstDayWeek; i++) {
    prevDays.unshift(prevLastDay - i);
  }
  const days = [];
  for (let i = 1; i <= lastDayDate; i++) {
    days.push(i);
  }

  const nextDays = [];

  const numberOfNextDays =
    prevDays.length + days.length <= 35
      ? 42 - prevDays.length - days.length
      : 6 - lastDayWeek;
  for (let i = 1; i <= numberOfNextDays; i++) {
    nextDays.push(i);
  }

  return (
    <div className={classes["calendar-zone"]}>
      <div className={classes.calendar}>
        <div className={classes["calendar-nav"]}>
          <button
            className={`${classes.btn} ${classes["btn-next"]}`}
            onClick={clickPrevHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={classes["btn-icon"]}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {`${currentMonth.toUpperCase()} ${currentYear}`}
          <button
            className={`${classes.btn} ${classes["btn-prev"]}`}
            onClick={clickNextHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={classes["btn-icon"]}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <div className={classes.line}></div>
        <div className={classes.days}>
          {prevDays.map((day) => (
            <div
              key={Math.random()}
              className={`${classes.day} ${classes["day-inactive"]}`}
            >
              {day.toString().length < 2 ? "0" + day : day}
            </div>
          ))}
          {days.map((day) => (
            <div
              key={Math.random()}
              onClick={() => clickHandler(day)}
              className={`${classes.day} ${
                day === today &&
                todayMonth === currentMonth &&
                todayYear === currentYear
                  ? classes.today
                  : ""
              } ${
                isClicked && dayClicked === day
                  ? classes["day-highlighted"]
                  : ""
              }`}
            >
              {day.toString().length < 2 ? "0" + day : day}
            </div>
          ))}
          {nextDays.map((day) => (
            <div
              key={Math.random()}
              className={`${classes.day} ${classes["day-inactive"]}`}
            >
              {day.toString().length < 2 ? "0" + day : day}
            </div>
          ))}
        </div>
        <div className={classes.line}></div>
        <div className={classes["week-days"]}>
          <div>S</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
        </div>
        <div className={classes.line}></div>
      </div>
    </div>
  );
}

export default Calendar;
