import classes from "./App.module.scss";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/LoginPage/Login";
import SignUp from "./components/SignupPage/SignUp";

function App() {
  return (
    <div className={classes.App}>
      <LandingPage></LandingPage>
      {/* <SignUp></SignUp>
      <Login></Login> */}
    </div>
  );
}

export default App;
