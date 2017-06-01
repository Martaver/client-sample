import { HelloWorld } from "../types/portyr-api";
import { Store } from "redux";
import { IReturn, JsonServiceClient } from "servicestack-client";
import actionCreatorFactory, { AnyAction, ActionCreator, Action } from "typescript-fsa";

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface SsRequestAction extends AnyAction {
  payload: SsRequestPayload<any>;
}

interface SsRequestPayload<T> {
    method: HttpMethod;
    args?: any;
    url?: string;
    request: T;
}

const NAMESPACE = "SERVICESTACK";
const RECEIVE = "RECEIVE";
const SEND = "SEND";

const actionCreator = actionCreatorFactory(NAMESPACE);

export const receive = <TResponse>() => actionCreator<TResponse>(RECEIVE);

export const send = <TRequest>(method: HttpMethod = "GET", args?: any, url?: string): SsRequestCreator<TRequest> => {

  const create = actionCreator<SsRequestPayload<TRequest>>(SEND);
  return Object.assign((request: TRequest) => create({method, args, url, request}), create);
};

interface SsRequestCreator<TRequest> extends ActionCreator<SsRequestPayload<TRequest>> {
  (request: TRequest): Action<SsRequestPayload<TRequest>>;
}

export const serviceStackMiddleware = (baseUrl: string) => (store: Store<any>) => {

  const client = new JsonServiceClient(baseUrl);

  return (next: any) => (action: AnyAction) => {

    if(action.type == `${NAMESPACE}/${SEND}`) {
      const request = action as SsRequestAction;

      client

      //Send the request, letting ServiceStack handle the plumbing.
      .send(request.payload.method, request.payload.request, request.payload.args, request.payload.url)

      //Receive a successful response and shape it as a 'receive' action that be targetted by a reducer.
      .then(response => {
        next({
          type: `${NAMESPACE}/${RECEIVE}`,
          payload: response,
        });
      });
    }
    // Call next when middleware is ready to proceed.
    // Next passes an action to the next middleware layer.
    return next(action);
  };
};
