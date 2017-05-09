import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import createBrowserHistory from "history/createBrowserHistory";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { HomeReducer, HomeState } from "../routes/Home";

declare const window: Window & { devToolsExtension: any, __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any };

export const history = createBrowserHistory();
const routerMw = routerMiddleware(history);

export type RootState = {
  home: HomeState,
};

const rootReducer = combineReducers<RootState>({
  router: routerReducer,
  home: HomeReducer,
});

// rehydrating state on app start: implement here...
const recoverState = (): RootState => ({} as RootState);

const rootEpic = combineEpics(

);

const epicMiddleware = createEpicMiddleware(rootEpic);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store singleton instance
export const store = createStore(
  rootReducer,
  recoverState(),
  composeEnhancers(applyMiddleware(routerMw, epicMiddleware)),
);
