import React from "react";
import Login from "./Login";

//make islogged in or not
var isLoggedIn = false;

function App() {
  return (
    // ternary operator for chg statement into expression
    <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
  );
}

export default App;
