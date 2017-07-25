import * as React from "react";
import { RootState } from "../store/index";
import { RouteComponentProps } from "react-router";

export const CoreLayout: React.StatelessComponent<{}> = ({children}) => (
  <div>
    <div>
      {children}
    </div>
  </div>
);
