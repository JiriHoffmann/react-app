import React from "react";
import logo from "./logo.svg";
import "./App.css";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FirebaseApp } from "./scripts/firebase";
import { Login } from "./screens/Login";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Login />
  );
}

export default App;
