import React from "react";
// import mui react components
import { RButton } from "@ritro-ui/mui-react-components";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>This is the main page of your application.</p>
      <RButton variant="contained" color="primary" disableElevation>
        Click me!
      </RButton>
    </div>
  );
};

export default Home;
