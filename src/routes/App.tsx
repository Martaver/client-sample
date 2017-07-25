import * as React from "react";
import { Route, RouteComponentProps, match } from "react-router";
import { ConnectedRouter, push } from "react-router-redux";
import { CoreLayout } from "../layouts/CoreLayout";
import { RootState, store, history } from "../store";
import { Home } from "./Home";
import { Provider } from "react-redux";
import { connect } from "../tools/react-redux-typescript";
import { JsonServiceClient } from "servicestack-client";
import { Dispatch } from "redux";

export const App: React.StatelessComponent<{}> = () => (
  <div>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <CoreLayout>
            <Route exact={true} path="/" component={Home as any} />
          </CoreLayout>
        </ConnectedRouter>
      </Provider>
  </div>
);
