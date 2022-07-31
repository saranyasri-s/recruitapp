import classes from "./App.module.scss";
import JobRegister from "./components/JobRegiter/JobRegister";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/LoginPage/Login";
import SignUp from "./components/SignupPage/SignUp";
import { Routes, Route } from "react-router";
function App() {
  return (
    <div className={classes.App}>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>

        <Route path="/Login" element={<Login></Login>}></Route>

        <Route path="/Signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/registerWork"
          element={<JobRegister></JobRegister>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
