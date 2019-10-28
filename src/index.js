import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Content from "./components/Content";

import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Content />
      </div>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
