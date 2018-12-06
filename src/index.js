import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Login } from "./login";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Login login={d => console.log(d)} error={null} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
