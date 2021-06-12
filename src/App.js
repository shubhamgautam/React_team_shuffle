import React from "react";
import Navbar from "./components/NavBar";
import Feedback from "./Nav";

export default function App(props) {
  const key = "1";
  return (
    <div key={key}>
      <Navbar
        navArray={[
          { title: "home", key: "home" },
          { title: "contact", key: "contace" }
        ]}
      />
      <Feedback />
    </div>
  );
}
