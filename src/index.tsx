import * as React from "react";
import * as ReactDOM from "react-dom";
import {  } from "whatwg-fetch";
import { App } from "./routes/App";
import {Environment} from "../scripts/Environment";
import { normalize } from "csstips";

ReactDOM.render(<App />, document.getElementById("app-container"));
normalize();

