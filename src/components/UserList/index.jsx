import React from "react";
import "./index.css";

const InputBox = (props) => {
  return (
    <div className="userlist">
      {props.users.map((item) => {
        return (
          <div>
            <span>{item?.rank || ""}</span>
            <span>{item.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default InputBox;
