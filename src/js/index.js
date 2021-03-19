//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../App.css";

//import your own components
//import { Home } from "./component/home.js";
import App from "../App";

//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));
