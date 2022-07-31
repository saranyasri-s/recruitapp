import classes from "./App.module.scss";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <div className={classes.App}>
      <LandingPage></LandingPage>
    </div>
  );
}

export default App;
