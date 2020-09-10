import React from "react";
import Screen from "./Screen/Screen";
import Keypad from "./Keypad/Keypad";

class Calculator extends React.Component {
  state = {
    equation: "",
    result: 0,
  };

  onButtonPress = (event) => {
    var equation = this.state.equation;
    const pressedButton = event.target.innerHTML;

    if (pressedButton === "C") {
      return this.clear();
    } else if (
      (pressedButton >= "0" && pressedButton <= "9") ||
      pressedButton === "."
    ) {
      equation += pressedButton;
    } else if (["+", "-", "*", "/", "%"].includes(pressedButton)) {
      equation += " " + pressedButton + " ";
    } else if (pressedButton === "=") {
      try {
        let result = eval(equation);
        if (!Number.isInteger(result)) result = result.toFixed(2);
        this.setState({ result: result });
      } catch (error) {
        alert("Invalid Mathematical Equation");
      }
    }
    this.setState({ equation: equation });
  };

  clear() {
    this.setState({ equation: "", result: 0 });
  }

  evaluate() {}

  render() {
    return (
      <div className="Calculator">
        <Screen
          equation={this.state.equation}
          result={this.state.result}
        ></Screen>
        <Keypad onButtonPress={this.onButtonPress} />
      </div>
    );
  }
}

export default Calculator;
