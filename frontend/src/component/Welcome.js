import { Grid, Typography } from "@material-ui/core";
import { useEffect } from "react";
const Welcome = (props) => {
  useEffect(() => {
    // Apply a class to the body element to set the background image when on the Welcome page
    document.body.classList.add("welcome-background");
    return () => {
      // Remove the class when the component unmounts
      document.body.classList.remove("welcome-background");
    };
  }, []);
  return (
    <div className="welcome-page"> 
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      {/* <Grid item>
        <Typography variant="h2">Welcome to Job Portal</Typography>
      </Grid> */}
    </Grid>
    </div>
  );
};

export const ErrorPage = (props) => {
  return (
    
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
   
  );
};

export default Welcome;