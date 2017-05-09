import * as React from "react";
import { Route } from "react-router";
import { ConnectedRouter, push } from "react-router-redux";
import { CoreLayout } from "../layouts/CoreLayout";
import { RootState, store, history } from "../store";
import styles from "./App.scss";
import { Home } from "./Home";
import { Provider } from "react-redux";
import { stateless } from "../tools/react-redux";
import { JsonServiceClient } from "servicestack-client";
import * as portyr from "../types/portyr-api";

const mapStateToProps = (state: RootState) => ({
  value: state.home.SomeValue,
});

const mapDispatchToProps = {
  goHome: () => push("/"),
};

export const Foo = stateless(mapStateToProps, mapDispatchToProps)(p => {

  const client = new JsonServiceClient("/api");
  const response = client.get(new portyr.HelloWorld());
  response.then(r => {
    console.log(r.hello);
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
          <Route exact={true} path="/" component={Home} />
          <Route path="/foo" component={Foo} />
        </CoreLayout>
      </ConnectedRouter>
    </Provider>
    </div>
);
