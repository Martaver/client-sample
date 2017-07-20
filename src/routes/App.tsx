import * as React from "react";
import { Route, RouteComponentProps, match } from "react-router";
import { ConnectedRouter, push } from "react-router-redux";
import { CoreLayout } from "../layouts/CoreLayout";
import { RootState, store, history } from "../store";
import { Home } from "./Home";
import { Provider } from "react-redux";
import { connect } from "../tools/react-redux-typescript";
import { JsonServiceClient } from "servicestack-client";
import * as portyr from "../types/portyr-api";
import { Dispatch } from "redux";
import { Foo } from "./Foo";
import { Profile } from "./Profile";

import styles from "./App.scss";
import "../styles/fonts/out/stylesheet.css";

import { Playground } from "./Playground/Playground";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export const App: React.StatelessComponent<{}> = () => (
  <div className={styles.body}>
    <MuiThemeProvider>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <CoreLayout>
            <Route exact={true} path="/" component={Home as any} />
            <Route path="/playground" component={Playground as any} />
            <Route path="/foo" component={Foo as any} />
            <Route path="/company" component={Profile as any} />
          </CoreLayout>
        </ConnectedRouter>
      </Provider>
    </MuiThemeProvider>
  </div>
);
