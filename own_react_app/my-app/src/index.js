import createRoot from "react-dom/client";
import App from "./components/app/app";
import ReactDom from 'react-dom';
import React from "react";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);