import React from "react";

const TimeTracker = ({ dailyTotal }) => {
  return (
    <div className="timeTracker">
      <h2>Total for the day: {dailyTotal} hours</h2>
    </div>
  );
};

export default TimeTracker;
