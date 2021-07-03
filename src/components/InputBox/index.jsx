import React from "react";
import InputComp from "../InputComp";
import "./index.css";

const InputBox = (props) => {
  const [userInput, setInput] = React.useState("");
  const [teamsInput, setTeamsInput] = React.useState("");

  const onTextInput = (evt) => {
    setInput(evt.target.value);
  };

  const onEnter = (evt) => {
    if (evt.key === "Enter") {
      props.onUserAdd(userInput);
      setInput("");
    }
  };

  const onTeamsInput = (evt) => {
    setTeamsInput(evt.target.value);
  };

  return (
    <div className="add-cont">
      <InputComp btnLabel={"Add New Member"} />
      <InputComp btnLabel={"Add new Team"} />
    </div>
  );
};

export default InputBox;

//box-shadow: 0vh 7.7142857143vh #fae56b, 7.7142857143vh 7.7142857143vh #f9de6b, 15.4285714286vh 7.7142857143vh #f8d76b, 23.1428571429vh 7.7142857143vh #f7d16b, 30.8571428571vh 7.7142857143vh #f6ca6b, 38.5714285714vh 7.7142857143vh #f5c36b, 46.2857142857vh 7.7142857143vh #f4bc6b, 0vh 15.4285714286vh #f3b56b, 7.7142857143vh 15.4285714286vh #f1ae6b, 15.4285714286vh 15.4285714286vh #f0a76b, 23.1428571429vh 15.4285714286vh #efa06b, 30.8571428571vh 15.4285714286vh #ee996b, 38.5714285714vh 15.4285714286vh #ec926b, 46.2857142857vh 15.4285714286vh #eb8b6b, 0vh 23.1428571429vh #e9836b, 7.7142857143vh 23.1428571429vh #e87b6b, 15.4285714286vh 23.1428571429vh #e6736b, 23.1428571429vh 23.1428571429vh #e56b6b, 30.8571428571vh 23.1428571429vh #e3636b, 38.5714285714vh 23.1428571429vh #e25b6b, 46.2857142857vh 23.1428571429vh #e0536b, 0vh 30.8571428571vh #df4e6b, 7.7142857143vh 30.8571428571vh #dd496c, 15.4285714286vh 30.8571428571vh #dc446c, 23.1428571429vh 30.8571428571vh #da3f6c, 30.8571428571vh 30.8571428571vh #d93a6c, 38.5714285714vh 30.8571428571vh #d7356d, 46.2857142857vh 30.8571428571vh #d6306d, 0vh 38.5714285714vh #cf2f6c, 7.7142857143vh 38.5714285714vh #c72f6c, 15.4285714286vh 38.5714285714vh #c02e6b, 23.1428571429vh 38.5714285714vh #b92e6a, 30.8571428571vh 38.5714285714vh #b22d69, 38.5714285714vh 38.5714285714vh #aa2d69, 46.2857142857vh 38.5714285714vh #a32c68, 0vh 46.2857142857vh #9c2c68, 7.7142857143vh 46.2857142857vh #952b67, 15.4285714286vh 46.2857142857vh #8e2b67, 23.1428571429vh 46.2857142857vh #872b66, 30.8571428571vh 46.2857142857vh #802b66, 38.5714285714vh 46.2857142857vh #792a65, 46.2857142857vh 46.2857142857vh #722a65, 0vh 54vh #6b2965, 7.7142857143vh 54vh #642964, 15.4285714286vh 54vh #5d2864, 23.1428571429vh 54vh #572863, 30.8571428571vh 54vh #502763, 38.5714285714vh 54vh #492762, 46.2857142857vh 54vh #422662, 0vh 61.7142857143vh #3b2661, 7.7142857143vh 61.7142857143vh #342661, 15.4285714286vh 61.7142857143vh #2d2660, 23.1428571429vh 61.7142857143vh #27255f, 30.8571428571vh 61.7142857143vh #20255e, 38.5714285714vh 61.7142857143vh #19255e, 46.2857142857vh 61.7142857143vh #12255d, 0vh 69.4285714286vh #152d60, 7.7142857143vh 69.4285714286vh #183464, 15.4285714286vh 69.4285714286vh #1b3c67, 23.1428571429vh 69.4285714286vh #1e446b, 30.8571428571vh 69.4285714286vh #214c6e, 38.5714285714vh 69.4285714286vh #245372, 46.2857142857vh 69.4285714286vh #275b75, 0vh 77.1428571429vh #2a6378, 7.7142857143vh 77.1428571429vh #2d6a7b, 15.4285714286vh 77.1428571429vh #30727e, 23.1428571429vh 77.1428571429vh #337a82, 30.8571428571vh 77.1428571429vh #368285, 38.5714285714vh 77.1428571429vh #398988, 46.2857142857vh 77.1428571429vh #3c918b, 0vh 84.8571428571vh #3f998e, 7.7142857143vh 84.8571428571vh #42a092, 15.4285714286vh 84.8571428571vh #45a895, 23.1428571429vh 84.8571428571vh #49af98, 30.8571428571vh 84.8571428571vh #4cb79b, 38.5714285714vh 84.8571428571vh #4fbe9f, 46.2857142857vh 84.8571428571vh #52c6a2, 0vh 92.5714285714vh #55cda5, 7.7142857143vh 92.5714285714vh #58d4a8, 15.4285714286vh 92.5714285714vh #5bdbab, 23.1428571429vh 92.5714285714vh #5de3ad, 30.8571428571vh 92.5714285714vh #60eab0, 38.5714285714vh 92.5714285714vh #63f1b3, 46.2857142857vh 92.5714285714vh #66f8b6, 0vh 100.2857142857vh #6df8b9, 7.7142857143vh 100.2857142857vh #74f9bd, 15.4285714286vh 100.2857142857vh #7bf9c0, 23.1428571429vh 100.2857142857vh #82f9c3, 30.8571428571vh 100.2857142857vh #89f9c6, 38.5714285714vh 100.2857142857vh #90faca, 46.2857142857vh 100.2857142857vh #97facd;
