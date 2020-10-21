import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { openPage } from "./utils/browser";

function openBaidu() {
  openPage("https://baidu.com");
}

function App() {
  return (
    <div>
      <button onClick={openBaidu}>打开浏览器</button>
    </div>
  );
}

export default App;
