
import { ActionCreator, Action } from "typescript-fsa/lib";
import { ActionsObservable } from "redux-observable";
import { Observable } from "rxjs/Observable";

export const on = <T>(ac: ActionCreator<T>) => {
  return (epic?: (actions$: ActionsObservable<Action<T>>) => Observable<Action<any>>) => (c: ActionsObservable<Action<T>>) => {
    return epic ? epic(c.ofType(ac.type)) : c.ofType(ac.type);
  };
};
