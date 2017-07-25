import { reducerWithInitialState } from "typescript-fsa-reducers";
import actionCreatorFactory, { ActionCreator, Action } from "typescript-fsa";

const actionCreator = actionCreatorFactory("HOME");

export const HomeActions = {
  searchTextChanged: actionCreator<{searchText: string}>("SEARCH_TEXT_CHANGED"),

};

export interface HomeState {
  searchText: string;
}

const INITIAL_STATE: HomeState = {
  searchText: "TEST"
};


export const HomeReducer = reducerWithInitialState(INITIAL_STATE)


;
