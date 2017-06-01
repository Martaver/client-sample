import { HomeActions } from "./Home.actions";
import { reducerWithInitialState } from "typescript-fsa-reducers";

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
