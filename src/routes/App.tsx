import * as React from "react";
import { Route } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import { CoreLayout } from "../layouts/CoreLayout";
import { RootState, store, history } from "../store";
import styles from "./App.scss";
import { Home } from "./Home";
import { Provider } from "react-redux";

const Foo: React.StatelessComponent<{}> = () => (
  <div>Hello</div>
);

export const App: React.StatelessComponent<{}> = () => (
  <div>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <CoreLayout>
          <Route exact={true} path="/" component={Home} />
          <Route path="/foo" component={Foo} />
        </CoreLayout>
      </ConnectedRouter>
    </Provider>
    </div>
);
