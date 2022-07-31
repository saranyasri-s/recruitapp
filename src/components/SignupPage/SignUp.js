import React from "react";
import classes from "./SignUp.module.scss";
function SignUp() {
  return (
    <div className={classes.SignUpPage}>
      <div className={classes.background}></div>
      <form className={classes.SignUpForm}>
        <h3>Login Form</h3>
        <label>Login Id</label>
        <input type="text"></input>
        <label>Password</label>
        <input type="password"></input>
        <button>Login</button>
      </form>
    </div>
  );
}

export default SignUp;
