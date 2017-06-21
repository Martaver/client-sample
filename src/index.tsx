import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./routes/App";
import { Environment } from "../scripts/Environment";
import { normalize, setupPage } from "csstips";
import * as injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById("app-container"));

/**
 * Configures normalize.css for the page.
 */
normalize();

/**
 * Sets app container to 100% height and width, sets box-sizing: border etc.
 */
setupPage("#app-container");
