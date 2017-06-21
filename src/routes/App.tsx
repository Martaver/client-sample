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
import { Profile, ProfileByType } from "./Profile";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export const App: React.StatelessComponent<{}> = () => (
  <div>
    <MuiThemeProvider>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <CoreLayout>
            <Route exact={true} path="/" component={Home as any} />
            <Route path="/foo" component={Foo as any} />
            <Route path="/profile" component={Profile as any} />
            <Route path="/profile-by-type" component={ProfileByType as any} />
          </CoreLayout>
        </ConnectedRouter>
      </Provider>
    </MuiThemeProvider>
  </div>
);
