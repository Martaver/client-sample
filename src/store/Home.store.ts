import { reducerWithInitialState } from "typescript-fsa-reducers";
import actionCreatorFactory, { ActionCreator, Action } from "typescript-fsa";
import { send, receive } from "../tools/servicestack";
import { QueryCompany, QueryResponse, Company } from "../types/portyr-api";
import { combineEpics, ActionsObservable, Epic } from "redux-observable";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { on } from "../tools/redux-observable-typescript";

const actionCreator = actionCreatorFactory("HOME");

export const HomeActions = {
  searchTextChanged: actionCreator<{searchText: string}>("SEARCH_TEXT_CHANGED"),
  sendSearch: send<QueryCompany>("SEARCH"),
  receiveSearch: receive<QueryResponse<Company>>("SEARCH"),
};

export interface HomeState {
  searchText: string;
  isSearching: boolean;
  searchResults: Company[];
}

const INITIAL_STATE: HomeState = {
  searchText: "FRAN",
  isSearching: false,
  searchResults: [],
};

const Search = on(HomeActions.searchTextChanged)(action$ => action$
  .map(a => {
    const req = new QueryCompany();
    req.name = a.payload.searchText;
    return HomeActions.sendSearch(req);
  })
);

export const HomeEpic = combineEpics(
  Search
);

export const HomeReducer = reducerWithInitialState(INITIAL_STATE)

  .case(HomeActions.searchTextChanged, (s, p) => ({...s,
    searchText: p.searchText
  }))

  .case(HomeActions.sendSearch, (s, p) => ({...s,
    isSearching: true
  }))

  .case(HomeActions.receiveSearch, (s, p) => ({...s,
    searchResults: p.results,
    isSearching: false
  }))
;
