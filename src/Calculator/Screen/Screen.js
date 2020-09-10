import React from "react";
import ResultScreen from "./ResultScreen";
import ComputationScreen from "./ComputationScreen";

function Screen(props) {
  return (
    <div className="Screen">
      <ResultScreen>{props.result}</ResultScreen>
      <ComputationScreen>{props.equation}</ComputationScreen>
    </div>
  );
}

export default Screen;
