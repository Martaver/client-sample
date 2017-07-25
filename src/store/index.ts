import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import createBrowserHistory from "history/createBrowserHistory";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { serviceStackMiddleware } from "../tools/servicestack";
import { FooReducer, FooState } from "./Foo.store";
import { HomeReducer, HomeState, HomeEpic } from "./Home.store";
import { constants } from "../constants";
import { ProfileReducer, ProfileState } from "./Profile.store";

declare const window: Window & { devToolsExtension: any, __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any };

export const history = createBrowserHistory();

export type RootState = {
  home: HomeState,
  foo: FooState,
  profile: ProfileState
};

const rootReducer = combineReducers<RootState>({
  router: routerReducer,
  home: HomeReducer,
  foo: FooReducer,
  profile: ProfileReducer
});

// rehydrating state on app start: implement here...
const recoverState = (): RootState => ({} as RootState);

const rootEpic = combineEpics(
  HomeEpic
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store singleton instance
export const store = createStore(
  rootReducer,
  recoverState(),
  composeEnhancers(applyMiddleware(
    serviceStackMiddleware(constants.API_BASEURL),
    routerMiddleware(history),
    createEpicMiddleware(rootEpic)
  )),
);
