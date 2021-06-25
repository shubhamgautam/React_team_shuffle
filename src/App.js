import React from "react";
import Navbar from "./components/NavBar";
import InputBox from "./components/InputBox";
import UserList from "./components/UserList";

import "./index.css";

export default function App(props) {
  const key = "1";
  const [appState, updateAppState] = React.useState({ userList: [] });

  const onUserAdd = (name) => {
    updateAppState({
      userList: [
        ...appState.userList,
        { name: name, rank: appState.userList.length + 1 }
      ]
    });
  };

  return (
    <main className="app">
      <header>
        <div>Shuffle App</div>
      </header>
      <InputBox onEnter={onUserAdd} />
      <UserList users={appState.userList} />
    </main>
  );
}
