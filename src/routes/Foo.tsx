import { HelloWorld } from "../types/portyr-api";
import { SsRequestActionCreator } from "../tools/servicestack";
import * as React from "react";
import { actionCreator, connect } from "../tools/react-redux-typescript";
import { RootState } from "../store/index";
import { push } from "react-router-redux";
import { JsonServiceClient } from "servicestack-client/src";
import * as portyr from "../types/portyr-api";
import { RouteComponentProps } from "react-router";

export const FooActions = {
  fetchHello: SsRequestActionCreator<HelloWorld>("GET", "/hello")
}

interface FooProps extends RouteComponentProps<any> {
  SomethingElse: string
}

const mapStateToProps = (state: RootState, own: FooProps) => ({
  value: state.home.SomeValue,
});

const mapDispatchToProps = {
  goHome: (blah: string) => push("/"),
  ...FooActions
};

export const Foo = connect(mapStateToProps, mapDispatchToProps)(p => {

  const client = new JsonServiceClient("/api");
  const request = new portyr.HelloWorld();
  const response = client.get(request);
  response.then(r => {
    console.log(r);
  });

  let myValues = {
    someValue: ""
  }

  return (
    <div>
      <div>Please eat now!</div>
      <div>{myValues.someValue}</div>
      <button onClick={p.goHome("blah")} >Go home</button>
      <button onClick={p.fetchHello(request)} >Give me a hello</button>
    </div>
  );
});
