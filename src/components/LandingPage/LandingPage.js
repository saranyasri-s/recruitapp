import React from "react";
import classes from "./LandingPage.module.scss";
function LandingPage() {
  return (
    <div>
      <header className={classes.LandingPageHeader}>
        <div className={classes.headerLeftBrandName}>
          <div className={classes.companyBrandLogo}></div> <h3> RecuitEasy</h3>
        </div>

        <div className={classes.headerRightButtons}>
          <button className={classes.findJobsButton}>Find jobs</button>
          <button className={classes.hireTalentButton}>Hire talent</button>
        </div>
      </header>
    </div>
  );
}

export default LandingPage;
