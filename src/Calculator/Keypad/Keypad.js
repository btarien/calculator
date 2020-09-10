import React from "react";
import Row from "./Row";
import Button from "../Button";

function Keypad(props) {
  return (
    <div className="Keypad">
      <Row>
        <Button onButtonPress={props.onButtonPress} type="operator">
          C
        </Button>
        <Button onButtonPress={props.onButtonPress} type="operator">
          +/-
        </Button>
        <Button onButtonPress={props.onButtonPress} type="operator">
          %
        </Button>
        <Button onButtonPress={props.onButtonPress} type="operator">
          /
        </Button>
      </Row>
      <Row>
        <Button onButtonPress={props.onButtonPress} type="number">
          9
        </Button>
        <Button onButtonPress={props.onButtonPress} type="number">
          8
        </Button>
        <Button onButtonPress={props.onButtonPress} type="number">
          7
        </Button>
        <Button onButtonPress={props.onButtonPress} type="operator">
          *
        </Button>
      </Row>
      <Row>
        <Button onButtonPress={props.onButtonPress} type="number">
          6
        </Button>
        <Button onButtonPress={props.onButtonPress} type="number">
          5
        </Button>
        <Button onButtonPress={props.onButtonPress} type="number">
          4
        </Button>
        <Button onButtonPress={props.onButtonPress} type="operator">
          -
        </Button>
      </Row>
      <Row>
        <Button onButtonPress={props.onButtonPress} type="number">
          3
        </Button>
        <Button onButtonPress={props.onButtonPress} type="number">
          2
        </Button>
        <Button onButtonPress={props.onButtonPress} type="number">
          1
        </Button>
        <Button onButtonPress={props.onButtonPress} type="operator">
          +
        </Button>
      </Row>
      <Row>
        <Button onButtonPress={props.onButtonPress}>0</Button>
        <Button onButtonPress={props.onButtonPress}>.</Button>
        <Button
          onButtonPress={props.onButtonPress}
          type="operator"
          size="large"
        >
          =
        </Button>
      </Row>
    </div>
  );
}

export default Keypad;
