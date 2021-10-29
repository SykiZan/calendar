import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import About from "./components/About";
import BackDrop from "./components/BackDrop";
import Calendar from "./components/Calendar";
import MainNav from "./components/MainNav";
import PopUp from "./components/PopUp";

function App() {
  const dispatch = useDispatch();
  const isClicked = useSelector((state) => state.isClicked);
  const date = useSelector((state) => state.date);

  console.log(isClicked);
  console.log(date);

  return (
    <div className="app">
      {isClicked && <BackDrop />}
      <MainNav />
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <main>
          <div className="main-header">
            <h1>Choose the day for the meeting</h1>
          </div>
          <div className="main-paragraph">
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
      </Route>
      <Route path="/About">
        <About />
      </Route>
    </div>
  );
}

export default App;
