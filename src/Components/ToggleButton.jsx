/*
Problem: Toggle Button

Create a React component for a toggle button. The button should have two states: "ON" and 
"OFF". Clicking the button should toggle between these states. Additionally, you should 
display the current state of the button (either "ON" or "OFF") above or below the button.

*/

import { useState } from "react";

const ToggleButton = () => {
  const [status, setStatus] = useState("OFF");

  const handleClick = () =>
    status === "OFF" ? setStatus("ON") : setStatus("OFF");

  return (
    <div>
      <h1>Status: {status}</h1>
      <button onClick={handleClick}>{status}</button>
    </div>
  );
};

export default ToggleButton;
