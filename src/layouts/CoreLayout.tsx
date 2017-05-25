import * as React from "react";
import styles from "./CoreLayout.scss";
import { RootState } from "../store/index";
import { Home } from "../routes/Home/index";
import { RouteComponentProps } from "react-router";

export const CoreLayout: React.StatelessComponent<{}> = ({children}) => (
  <div>
    <h1 className={styles.clr}>Testing Core Layout</h1>
    {children}
  </div>
);
