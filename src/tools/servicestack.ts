import { HelloWorld } from "../types/portyr-api";
import { Store } from "redux";
import { Action } from "redux";
import { IReturn, JsonServiceClient } from "servicestack-client";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface SsRequestAction<T> {
  type: "SERVICESTACK_REQUEST",
  payload: {
    method: HttpMethod,
    url: string,
    request: IReturn<any>
  }
}

export const SsRequestActionCreator = <T extends IReturn<any>>(method: HttpMethod, url: string) => (request: T): SsRequestAction<T> => ({
  type: "SERVICESTACK_REQUEST",
  payload: {
    method,
    url,
    request
  }
});

const serviceStackMiddleware = (baseUrl: string) => (store: Store<any>) => {

  // Configure client here.
  const client = new JsonServiceClient(baseUrl);

  return (next: any) => (action: Action) => {

    if(action.type === "SERVICESTACK_REQUEST") {
      const request = action as SsRequestAction<HelloWorld>;
      client.send(request.payload.method, request.payload.request, {}, request.payload.url).then( response => {
        next({
          type: "SERVICESTACK_RESPONSE",
          payload: {
            ...request.payload,
            response
          }
        });
      })
    }
    // Call next when middleware is ready to proceed.
    // Next passes an action to the next middleware layer.
    return next(action);
  };
};
