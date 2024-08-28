import React, { useState } from "react";
// import mui react components
import {
  RButton,
  ButtonWithLoadingSpinner,
} from "@ritro-ui/mui-react-components";

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div>
      <h1>Welcome to the Home Page for Ritro UI.dev </h1>
      <p>This is the main page of your application.</p>
      <RButton variant="contained" color="primary" disableElevation>
        Click me!
      </RButton>
      <ButtonWithLoadingSpinner onClick={handleClick} loading={loading}>
        Click to Load
      </ButtonWithLoadingSpinner>
    </div>
  );
};

export default Home;
