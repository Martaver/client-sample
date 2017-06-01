import * as React from "react";
import { RootState } from "../store/index";
import { connect, rtypeof } from "../tools/react-redux-typescript";
import { receive, send } from "../tools/servicestack";
import { HelloWorld, HelloWorldResponse } from "../types/portyr-api";
import * as portyr from "../types/portyr-api";
import { push } from "react-router-redux";
import { JsonServiceClient } from "servicestack-client/src";
import { reducerWithInitialState } from "typescript-fsa-reducers";

export const FooActions = {
  fetchHello: send<HelloWorld>("GET"),
  gotHello: receive<HelloWorldResponse>()
}

export type FooState = {
  hello: string
}

const INITIAL_STATE: FooState = {
  hello: "-- no hello --"
}

export const FooReducer = reducerWithInitialState(INITIAL_STATE)
.case(FooActions.gotHello, (s, p) => ({
  hello: p.hello
}))

interface FooProps {
  someAttribute: string
}

const mapStateToProps = (state: RootState, own: FooProps) => ({
  hello: state.foo.hello,
});

const dispatchProps = {
  goHome: () => push("/"),
  ...FooActions
};

class FooRefs {
  name: HTMLInputElement
}

export const Foo = connect(mapStateToProps, dispatchProps)(p => {

  let refs = new FooRefs();

  const fetchHello = () => {
   const request = new portyr.HelloWorld();
   request.name = refs.name.value;
   p.fetchHello(request);
  }

  return (
    <div>
      <div>Please eat now!</div>
      <input name="name" ref={c => refs.name = c} />
      <div>{p.hello}</div>
      <button onClick={p.goHome} >Go home</button>
      <button onClick={fetchHello} >Give me a hello</button>
    </div>
  );
});
