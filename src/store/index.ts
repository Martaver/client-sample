import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createBrowserHistory from "history/createBrowserHistory";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { HomeReducer, HomeState } from "./Home.store";
import { constants } from "../constants";

declare const window: Window & { devToolsExtension: any, __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any };

export const history = createBrowserHistory();

export type RootState = {
  home: HomeState,
};

const rootReducer = combineReducers<RootState>({
  router: routerReducer,
  home: HomeReducer,
});

// rehydrating state on app start: implement here...
const recoverState = (): RootState => ({} as RootState);


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store singleton instance
export const store = createStore(
  rootReducer,
  recoverState(),
  composeEnhancers(applyMiddleware(
    routerMiddleware(history),
  )),
);
