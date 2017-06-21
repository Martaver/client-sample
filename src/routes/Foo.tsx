
import * as React from "react";
import { RootState } from "../store/index";
import { connect } from "../tools/react-redux-typescript";
import { receive, send } from "../tools/servicestack";
import { HelloWorld, HelloWorldResponse } from "../types/portyr-api";
import * as portyr from "../types/portyr-api";
import { push } from "react-router-redux";
import { JsonServiceClient } from "servicestack-client/src";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import { ChangeEvent } from "react";
import { FooActions } from "../store/Foo.store";

interface FooProps {
  someAttribute: string;
}

const mapStateToProps = (state: RootState, own: FooProps) => ({
  ...state.foo
});

const dispatchProps = {
  goHome: () => push("/"),
  ...FooActions
};

export const Foo = connect(mapStateToProps, dispatchProps)(p => {

  const fetchHello = () => {
   const request = new portyr.HelloWorld();
   request.name = p.name;
   p.sendHello(request);
  };

  const fetchMultiply = () => {
    const request = new portyr.MultiplyIntegers();
    request.first = p.first;
    request.second = p.second;
    p.sendMultiply(request);
  };

  const nameChanged = (e: ChangeEvent<HTMLInputElement>) => {
    p.updateName({name: e.target.value});
  };

  const firstChanged = (e: ChangeEvent<HTMLInputElement>) => {
    p.updateFirst({first: Number.parseInt(e.target.value)});
  };

  const secondChanged = (e: ChangeEvent<HTMLInputElement>) => {
    p.updateSecond({second: Number.parseInt(e.target.value)});
  };

  return (
    <div>
      <div>Please enter name:</div>
      <input name="name" value={p.name} onChange={nameChanged} />
      <div>First number:</div>
      <input name="name" value={p.first} onChange={firstChanged} />
      <div>Second number:</div>
      <input name="name" value={p.second} onChange={secondChanged} />

      <div>Product I can change logic is... {p.product}</div>

      <div>HELLO {p.hello}</div>

      <button onClick={fetchMultiply} >Multiply</button>
      <button onClick={p.goHome} >Go home</button>
      <button onClick={fetchHello} >Give me a hello</button>
    </div>
  );
});
