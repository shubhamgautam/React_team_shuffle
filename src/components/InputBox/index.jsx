import React from "react";
import "./index.css";

const InputBox = (props) => {
  const [userInput, setInput] = React.useState("");

  const onTextInput = (evt) => {
    setInput(evt.target.value);
  };

  const onEnter = () => {
    props.onEnter(userInput);
    setInput("");
  };

  return (
    <div className="input-box">
      <input type="text" onChange={onTextInput} value={userInput} />
      <button onClick={onEnter}>Enter</button>
    </div>
  );
};

export default InputBox;
