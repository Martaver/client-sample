import * as React from "react";
import { Route, RouteComponentProps, match } from "react-router";
import { ConnectedRouter, push } from "react-router-redux";
import { CoreLayout } from "../layouts/CoreLayout";
import { RootState, store, history } from "../store";
import styles from "./App.scss";
import { Home } from "./Home";
import { Provider } from "react-redux";
import { connect } from "../tools/react-redux-typescript";
import { JsonServiceClient } from "servicestack-client";
import * as portyr from "../types/portyr-api";
import * as H from "history";
import { Dispatch } from "redux";

interface FooProps {
  SomethingElse: string
}

const mapStateToProps = (state: RootState, own: FooProps) => ({
  value: state.home.SomeValue,
});

const mapDispatchToProps = {
  goHome: () => push("/"),
};

export const Foo = connect(mapStateToProps, mapDispatchToProps)(p => {

  const client = new JsonServiceClient("/api");
  const request = new portyr.HelloWorld();
  const response = client.get(request);
  response.then(r => {
    console.log(r);
  });

  return (
    <div>
      <div>Please eat now!</div>
      <button onClick={p.goHome} >Go home</button>
    </div>
  );
});

export const App: React.StatelessComponent<{}> = () => (
  <div>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <CoreLayout>
          <Route exact={true} path="/" component={Home as any} />
          <Route path="/foo" component={Foo as any} />
        </CoreLayout>
      </ConnectedRouter>
    </Provider>
    </div>
);
