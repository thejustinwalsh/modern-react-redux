import React from "react";

const LoadingSpinner = ({ message }) => {
  return (
    <div class="ui active dimmer">
      <div class="ui text loader">{message}</div>
    </div>
  );
};

LoadingSpinner.defaultProps = {
  message: "Loading...",
};

export default LoadingSpinner;
