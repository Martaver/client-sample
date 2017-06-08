import { HelloWorld, HelloWorldResponse, MultiplyIntegers, MultiplyIntegersResponse } from "../types/portyr-api";
import { receive, send } from "../tools/servicestack";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory("FOO");

export const FooActions = {
  sendHello: send<HelloWorld>("HELLO_WORLD"),
  receiveHello: receive<HelloWorldResponse>("HELLO_WORLD"),
  updateName: actionCreator<{name: string}>("NAME_CHANGE"),
  sendMultiply: send<MultiplyIntegers>("MULTIPLY_INTEGERS"),
  receiveMultiply: receive<MultiplyIntegersResponse>("MULTIPLY_INTEGERS"),
};

export type FooState = {
  hello: string,
  name: string,
  first: number,
  second: number,
  product: number
};

const INITIAL_STATE: FooState = {
  hello: "-- no hello --",
  name: "",
  first: 0,
  second: 0,
  product: 0
};

export const FooReducer = reducerWithInitialState(INITIAL_STATE)

  .case(FooActions.updateName, (s, p) => ({...s, ...p}))

  .case(FooActions.receiveHello, (s, p) => ({...s,
    hello: p.hello,
  }))

  .case(FooActions.receiveMultiply, (s, p) => ({...s,
      product: p.product
  }))
;
