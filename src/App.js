import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import About from "./components/About";
import BackDrop from "./components/BackDrop";
import Main from "./components/Main";
import MainNav from "./components/MainNav";

function App() {
  const isClicked = useSelector((state) => state.isClicked);

  return (
    <div className="app">
      {isClicked && <BackDrop />}
      <MainNav />
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <Main />
      </Route>
      <Route path="/About">
        <About />
      </Route>
    </div>
  );
}

export default App;
