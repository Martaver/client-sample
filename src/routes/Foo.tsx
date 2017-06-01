import { FooActions } from "../store/Foo";
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

interface FooProps {
  someAttribute: string;
}

const mapStateToProps = (state: RootState, own: FooProps) => ({
  hello: state.foo.hello,
  name: state.foo.name
});

const dispatchProps = {
  goHome: () => push("/"),
  ...FooActions
};

export const Foo = connect(mapStateToProps, dispatchProps)(p => {

  const fetchHello = () => {
   const request = new portyr.HelloWorld();
   request.name = p.name;
   p.fetchHello(request);
  };

  const nameChanged = (e: ChangeEvent<HTMLInputElement>) => {
    p.updateName({name: e.target.value});
  };

  return (
    <div>
      <div>Please eat now!</div>
      <input name="name" value={p.name} onChange={nameChanged} />
      <div>{p.hello}</div>
      <button onClick={p.goHome} >Go home</button>
      <button onClick={fetchHello} >Give me a hello</button>
    </div>
  );
});
