import React from "react";
import "./index.css";

const InputBox = (props) => {
  return (
    <div className="userlist">
      {props.users.map((item) => {
        return (
          <div className="item-card">
            <span className="item-rank">{item?.rank || ""}</span>
            <span>{item.name}</span>
          </div>
        );
      })}
    </div>
  );
};

//https://codepen.io/davidkpiano/pen/xwyVXO

export default InputBox;
