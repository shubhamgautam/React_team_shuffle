import React, { useState } from "react";
import "./index.css";

const InputComp = (props) => {
  const { onKeyDown, onChange, textInput } = props;
  const [isBtnActive, setBtnAction] = useState(true);
  const toggleInput = () => {
    setBtnAction(false);
  };

  return (
    <div>
      <div>
        <button
          className={`add ${!isBtnActive ? "hide" : ""}`}
          onClick={toggleInput}
        >
          Add New Team
        </button>
      </div>
      <input
        type="text"
        className={`inputBox ${isBtnActive ? "hide" : ""}`}
        onKeyDown={onKeyDown}
        onChange={onChange}
        value={textInput}
      />
    </div>
  );
};

export default InputComp;
