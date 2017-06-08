import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import createBrowserHistory from "history/createBrowserHistory";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { HomeReducer, HomeState } from "../routes/Home";
import { serviceStackMiddleware } from "../tools/servicestack";
import { FooReducer, FooState } from "./Foo";
import { constants } from "../constants";

declare const window: Window & { devToolsExtension: any, __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any };

export const history = createBrowserHistory();
const routerMw = routerMiddleware(history);

export type RootState = {
  home: HomeState,
  foo: FooState
};

const rootReducer = combineReducers<RootState>({
  router: routerReducer,
  home: HomeReducer,
  foo: FooReducer
});

// rehydrating state on app start: implement here...
const recoverState = (): RootState => ({} as RootState);

const rootEpic = combineEpics(

);

const epicMiddleware = createEpicMiddleware(rootEpic);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

console.log(constants.API_BASEURL);
const servicestack = serviceStackMiddleware(constants.API_BASEURL);

// store singleton instance
export const store = createStore(
  rootReducer,
  recoverState(),
  composeEnhancers(applyMiddleware(servicestack, routerMw, epicMiddleware)),
);
