import React from "react";
import "./index.css";

// export default class Feedback extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { upCount: 0, downCount: 0 };
//   }
//   componentDidMount() {}

//   updateUpCount = () => {
//     let val = this.state.upCount;
//     this.setState({ upCount: val + 1 });
//   };

//   updateDownCount = () => {
//     let val = this.state.downCount;
//     this.setState({ downCount: val + 1 });
//   };

//   componentWillUnmount() {}

//   render() {
//     return (
//       <div className="flex-row ">
//         <div onClick={this.updateUpCount}>Up: {this.state.upCount || ""}</div>
//         <div onClick={this.updateDownCount}>
//           Down: {this.state.downCount || ""}
//         </div>
//       </div>
//     );
//   }
// }

const Feedback = () => {
  const [fbState, setFbState] = React.useState({ upCount: 0, downCount: 0 });

  const updateUpCount = () => {
    setFbState({
      downCount: fbState.downCount,
      upCount: fbState.upCount + 1
    });
  };

  const updateDownCount = () => {
    setFbState({
      downCount: fbState.downCount + 1,
      upCount: fbState.upCount
    });
  };

  return (
    <div className="flex-row ">
      <div onClick={updateUpCount}>Up: {fbState.upCount || ""}</div>
      <div onClick={updateDownCount}>Down: {fbState.downCount || ""}</div>
    </div>
  );
};

export default Feedback;
