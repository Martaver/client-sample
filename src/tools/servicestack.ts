import { HelloWorld } from "../types/portyr-api";
import { Store } from "redux";
import { IReturn, JsonServiceClient } from "servicestack-client";
import actionCreatorFactory, { AnyAction, ActionCreator, Action } from "typescript-fsa";

export enum Method {
  Get,
  Post,
  Put,
  Patch,
  Delete
}

interface SsRequestAction extends AnyAction {
  payload: SsRequestPayload<any>;
}

interface SsRequestPayload<T> {
    method: Method;
    args?: any;
    url?: string;
    request: T;
}

const NAMESPACE = "SS";
const RECEIVE = "RECEIVE";
const SEND = "SEND";
const ERROR = "ERROR";

const actionCreator = actionCreatorFactory(NAMESPACE);

export const receive = <TResponse>(name: string) => actionCreator<TResponse>(`${RECEIVE}/${name}`);

export const error = <TResponse>(name: string) => actionCreator<TResponse>(`${ERROR}/${name}`);

export const send = <TRequest>(name: string, method: Method = Method.Get, args?: any, url?: string): SsRequestCreator<TRequest> => {

  const creator = actionCreator<SsRequestPayload<TRequest>>(`${SEND}/${name}`);
  return Object.assign((request: TRequest) => creator({method, args, url, request}), creator);
};

interface SsRequestCreator<TRequest> extends ActionCreator<SsRequestPayload<TRequest>> {
  (request: TRequest): Action<SsRequestPayload<TRequest>>;
}

const methodOf = (method: Method) => {
  switch(method) {
      case(Method.Get): return "GET";
      case(Method.Post): return "POST";
      case(Method.Put): return "PUT";
      case(Method.Patch): return "PATCH";
      case(Method.Delete): return "DELETE";
      default: throw "Unknown HTTP Method";
    }
};

export const serviceStackMiddleware = (baseUrl: string) => (store: Store<any>) => {

  const client = new JsonServiceClient(baseUrl);


  return (next: any) => (action: AnyAction) => {

    const type = action.type as string;
    const prefix = `${NAMESPACE}/${SEND}`;
    if(type.startsWith(prefix)) {

      const name = type.substring(prefix.length+1);
      const request = action as SsRequestAction;

      //Send the request, letting ServiceStack handle the plumbing.
      client.send(methodOf(request.payload.method), request.payload.request, request.payload.args, request.payload.url)

      //Receive an error response and shape it as an 'error' action that can be handled by a reducer.
      .catch(error => next({
        type: `${NAMESPACE}/${ERROR}/${name}`,
        payload: error
      }))

      //Receive a successful response and shape it as a 'receive' action that be handled by a reducer.
      .then(response => next({
          type: `${NAMESPACE}/${RECEIVE}/${name}`,
          payload: response,
        }));
    }
    // Call next when middleware is ready to proceed.
    // Next passes an action to the next middleware layer.
    return next(action);
  };
};
