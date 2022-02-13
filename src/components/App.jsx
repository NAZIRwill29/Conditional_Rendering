import React from "react";
import Login from "./Login";

//make islogged in or not
var isLoggedIn = false;

function renderConditionally() {
  if (isLoggedIn) {
    return <h1>Hello</h1>;
  } else {
    return <Login />;
  }
}

function App() {
  return <div className="container">{renderConditionally()}</div>;
}

export default App;
