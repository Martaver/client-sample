import * as React from "react";
import { RootState } from "../store/index";
import { connect, rtypeof } from "../tools/react-redux-typescript";
import { SsRequestActionCreator } from "../tools/servicestack";
import { HelloWorld } from "../types/portyr-api";
import * as portyr from "../types/portyr-api";
import { push } from "react-router-redux";
import { JsonServiceClient } from "servicestack-client/src";

export const FooActions = {
  fetchHello: SsRequestActionCreator<HelloWorld>("GET")
}

interface FooProps {
  SomethingElse: string
}

const mapStateToProps = (state: RootState, own: FooProps) => ({
  value: state.home.SomeValue,
});

const dispatchProps = {
  goHome: () => push("/"),
  ...FooActions
};

const stateProps = rtypeof(mapStateToProps);
type AllProps = typeof stateProps & typeof dispatchProps & FooProps;

export const Foo = connect(mapStateToProps, dispatchProps)(p => {

  let myRequest = new portyr.HelloWorld();

  let myValues = {
    someValue: ""
  }

  return (
    <div>
      <div>Please eat now!</div>
      <div>{myValues.someValue}</div>
      <button onClick={p.goHome} >Go home</button>
      <button onClick={() => p.fetchHello(myRequest)} >Give me a hello</button>
    </div>
  );
});
