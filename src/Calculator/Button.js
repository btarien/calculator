import React from "react";

function Button(props) {
  var classNameList = "Button";
  if (props.type === "operator") {
    classNameList += " operator";
  }
  if (props.size === "large") {
    classNameList += " large";
  }
  return (
    <button className={classNameList} onClick={props.onButtonPress}>
      {props.children}
    </button>
  );
}

export default Button;
