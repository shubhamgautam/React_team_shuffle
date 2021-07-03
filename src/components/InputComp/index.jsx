import React, { useState } from "react";
import "./index.css";

const InputComp = (props) => {
  const { onKeyDown, onChange, textInput, btnLabel } = props;
  const [isBtnActive, setBtnAction] = useState(true);
  const toggleInput = () => {
    setBtnAction(false);
  };

  return (
    <div className="input-comp">
      <div>
        <button
          className={`add ${!isBtnActive ? "hide" : ""}`}
          onClick={toggleInput}
        >
          {btnLabel}
        </button>
      </div>
      <input
        type="text"
        className={`inputBox ${!isBtnActive ? "show" : ""}`}
        onKeyDown={onKeyDown}
        onChange={onChange}
        value={textInput}
      />
    </div>
  );
};

export default InputComp;
