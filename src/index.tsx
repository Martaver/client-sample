import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./routes/App";
import { Environment } from "../scripts/Environment";
import * as injectTapEventPlugin from "react-tap-event-plugin";

// Try and inject tap event plugin - this is required by material-ui.
// If it fails, however, don't complain - it's no big deal.
// E.g. if fuse-box hot reloader triggers, this will attempt to reload and cause 'injectTapEventPlugin(): Can only be called once per application lifecycle.'
try { injectTapEventPlugin(); } catch(e) { }

console.log('running App...');
ReactDOM.render(<App />, document.getElementById("app-container"));
