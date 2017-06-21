import { reducerWithInitialState } from "typescript-fsa-reducers";
import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory("HOME");

export const HomeActions = {
  setNarf: actionCreator<{someString: string}>("SET_NARF"),
  setFran: actionCreator<{someNumber: number}>("SET_FRAN"),
};


const INITIAL_STATE = {
  SomeValue: "FRAN",
};

export type HomeState = typeof INITIAL_STATE;

export const HomeReducer = reducerWithInitialState(INITIAL_STATE)

  .case(HomeActions.setFran, (s, p) => ({
    SomeValue: "FRANT"
  }))

  .case(HomeActions.setNarf, (s, p) => ({
    SomeValue: "NARF"
  }))
;
