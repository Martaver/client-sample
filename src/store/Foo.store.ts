import { HelloWorld, HelloWorldResponse, MultiplyIntegers, MultiplyIntegersResponse } from "../types/portyr-api";
import {Method, receive,   send} from '../tools/servicestack';
import { reducerWithInitialState } from "typescript-fsa-reducers";
import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory("FOO");

export const FooActions = {
  sendHello: send<HelloWorld>("HELLO_WORLD"),
  receiveHello: receive<HelloWorldResponse>("HELLO_WORLD"),

  sendMultiply: send<MultiplyIntegers>("MULTIPLY_INTEGERS", Method.Post),
  receiveMultiply: receive<MultiplyIntegersResponse>("MULTIPLY_INTEGERS"),

  updateName: actionCreator<{name: string}>("NAME_CHANGE"),
  updateFirst: actionCreator<{first: number}>("UPDATE_FIRST"),
  updateSecond: actionCreator<{second: number}>("UPDATE_SECOND"),

};

const INITIAL_STATE = {
  hello: "-- no hello --",
  name: "",
  first: 0,
  second: 0,
  product: 0
};

export type FooState = typeof INITIAL_STATE;

export const FooReducer = reducerWithInitialState(INITIAL_STATE)

  .case(FooActions.updateName, (s, p) => ({...s, ...p}))

  .case(FooActions.receiveHello, (s, payload) => ({...s,
    hello: payload.hello + payload.numberOfEyesAkaHas,
  }))

  .case(FooActions.updateFirst, (s,p) => ({...s,
    first: p.first
  }))

  .case(FooActions.updateSecond, (s,p) => ({...s,
    second: p.second
  }))

  .case(FooActions.receiveMultiply, (s, p) => ({...s,
      product: p.product
  }))
;
