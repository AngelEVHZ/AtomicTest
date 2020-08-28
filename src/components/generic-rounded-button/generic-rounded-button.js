import React from 'react';

export default function GenericRoundedButton(props) {
  const { callBack, disabled } = props;
  const style = {
    backgroundColor: props.btnColor || "white",
    color: props.textColor || "",
    width: (props.width || "200") + "px",
  }
  return (
    <button
      disabled={disabled}
      type="button"
      className="btn btn-lg rounded-pill font-weight-bold"
      style={style}
      onClick={callBack}
    >
      {props.children}
    </button>
  )
};
