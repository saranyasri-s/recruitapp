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
      <main>
        <div className={classes.landinPageIntroCard}>
          <h3>Where techies realise their true potential</h3>
          <p>
            Look beyond the obvious. Use RecruitEasy to easily get discovered by
            awesome<br></br>companies and get referred to job positions very few
            know about it
          </p>
          <div className={classes.mainIntroButtons}>
            <button className={classes.findJobsButton}>Find jobs</button>
            <button className={classes.hireTalentButton}>Hire talent</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
