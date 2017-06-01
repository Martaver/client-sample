import { HelloWorld, HelloWorldResponse } from "../types/portyr-api";
import { receive, send } from "../tools/servicestack";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory("FOO");

export const FooActions = {
  sendHello: send<HelloWorld>("GET"),
  receiveHello: receive<HelloWorldResponse>(),
  updateName: actionCreator<{name: string}>("NAME_CHANGE")
};

export type FooState = {
  hello: string,
  name: string
};

const INITIAL_STATE: FooState = {
  hello: "-- no hello --",
  name: ""
};

export const FooReducer = reducerWithInitialState(INITIAL_STATE)

  .case(FooActions.sendHello, (s, p) => ({...s}))

  .case(FooActions.updateName, (s, p) => ({...s, ...p}))

  .case(FooActions.receiveHello, (s, p) => ({...s,
    hello: p.hello,
  }))
;
