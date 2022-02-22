import React from "react";
import ReactDOM from "react-dom";
import { Store } from "store";
import { App } from "app";
import { GlobalStyle } from "./index.styles";
import reportWebVitals from "./reportWebVitals";
import "normalize.css";

ReactDOM.render(
  <Store>
    <GlobalStyle />
    <App />
  </Store>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
