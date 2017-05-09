import { Store } from "redux";
import { JsonServiceClient } from "servicestack-client";

const serviceStackMiddleware = (baseUrl: string) => (store: Store<any>) => {

  // Configure client here.
  // const client = new servicestack.JsonServiceClient(baseUrl);

  return (next: any) => (action: any) => {

    // Call next when middleware is ready to proceed.
    // Next passes an action to the next middleware layer.
    return next(action);
  };
};
