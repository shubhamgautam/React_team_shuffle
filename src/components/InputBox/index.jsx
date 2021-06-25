import React from "react";
import "./index.css";

const InputBox = (props) => {
  const [userInput, setInput] = React.useState("");

  const onTextInput = (evt) => {
    setInput(evt.target.value);
  };

  const onEnter = (evt) => {
    if (evt.key === "Enter") {
      props.onEnter(userInput);
      setInput("");
    }
  };

  return (
    <div className="input-box">
      <input
        type="text"
        onKeyDown={onEnter}
        onChange={onTextInput}
        value={userInput}
      />
    </div>
  );
};

export default InputBox;
