import React from "react";
import "./index.css";

const InputBox = (props) => {
  return (
    <div className="userlist">
      <div className="members">
        <h2>Members</h2>
        {props.users.map((item) => {
          return (
            <div className="item-card">
              <span className="item-rank">{item?.rank || ""}</span>
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
      <div className="teams">
        <h3>Teams</h3>
        <div>
          <button className="add-teams">Add</button>
        </div>
      </div>
    </div>
  );
};

//https://codepen.io/davidkpiano/pen/xwyVXO

export default InputBox;
