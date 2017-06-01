import { HomeActions } from "./Home.actions";
import { reducerWithInitialState } from "typescript-fsa-reducers";

export type HomeState = {
  SomeValue: string,
};

const INITIAL_STATE: HomeState = {
  SomeValue: "FRAN",
};

export const HomeReducer = reducerWithInitialState(INITIAL_STATE)

  .case(HomeActions.setFran, (s, p) => ({
    SomeValue: "FRANT"
  }))

  .case(HomeActions.setNarf, (s, p) => ({
    SomeValue: "NARF"
  }))
;
