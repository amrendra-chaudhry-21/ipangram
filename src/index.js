import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ContextWrapper from "./context/ContextWrapper";
ReactDOM.render(
  <React.StrictMode>
    <ContextWrapper>
      <App />
    </ContextWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);

