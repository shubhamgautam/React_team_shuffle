import React from "react";
import Navbar from "./components/NavBar";
import InputBox from "./components/InputBox";
import UserList from "./components/UserList";

export default function App(props) {
  const key = "1";
  const [appState, updateAppState] = React.useState({ userList: [] });

  const onUserAdd = (name) => {
    updateAppState({ userList: [...appState.userList, { name: name }] });
  };

  return (
    <div key={key}>
      <Navbar
        navArray={[
          { title: "home", key: "home" },
          { title: "contact", key: "contace" }
        ]}
      />
      <InputBox onEnter={onUserAdd} />
      <UserList users={appState.userList} />
    </div>
  );
}
