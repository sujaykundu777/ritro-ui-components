import React, { useState } from "react";
// import mui react components
import {
  RButton,
  RDatePicker,
  ButtonWithLoadingSpinner,
} from "@ritro-ui/mui-react-components";
import dayjs from "dayjs";

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

      <h1> Date Picker </h1>
      <RDatePicker
        label="Date"
        name="date"
        value={dayjs("02-01-2024", "DD-MM-YYYY")}
        onChange={(date) => console.log(date)}
        format="DD/MM/YYYY"
        formatDensity="dense"
        minDate={dayjs("01-01-2024", "DD-MM-YYYY")}
        maxDate={dayjs("01-12-2024", "DD-MM-YYYY")}
        openTo="day"
        views={["day", "month", "year"]}
      />
      <ButtonWithLoadingSpinner onClick={handleClick} loading={loading}>
        Click to Load
      </ButtonWithLoadingSpinner>
    </div>
  );
};

export default Home;
