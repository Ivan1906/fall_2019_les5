import React, { Fragment } from "react";
import T from "prop-types";

const Input = ({ type, value, placeholder, onClick, onKeyUp }) => {
  const onBlurHandle = e => {
    e.target.value = "";
  };

  return (
    <Fragment>
      {type === "button" ? (
        <input type="button" value={value} onClick={onClick} />
      ) : null}
      {type === "text" ? (
        <input
          type="text"
          placeholder={placeholder}
          onKeyUp={onKeyUp}
          onBlur={onBlurHandle}
        />
      ) : null}
    </Fragment>
  );
};

Input.defaulProps = {
  type: "button",
  value: "",
  placeholder: "",
  onClick: () => console.log("Function 'onClick'!"),
  onKeyUp: () => console.log("Function 'onKeyUp'!")
};

Input.displayName = "Input";

Input.propTypes = {
  type: T.string.isRequired,
  value: T.string,
  placeholder: T.string,
  onClick: T.func,
  onKeyUp: T.func
};

export default Input;
