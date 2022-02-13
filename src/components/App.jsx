import React from "react";
import Login from "./Login";

//make islogged in or not
var isLoggedIn = false;

function App() {
  return (
    // ternary operator for chg statement into expression
    //<div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
    //ternary operator with else return null
    //<div className="container">{isLoggedIn ? <h1>Hello</h1> : null}</div>
    //&& operator - make if true return  expression and false return null
    <div className="container">{isLoggedIn && <h1>Hello</h1>}</div>
  );
}

export default App;
