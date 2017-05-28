import * as React from "react";
import { RootState } from "../store/index";
import { Home } from "../routes/Home/index";
import { RouteComponentProps } from "react-router";
import { Toolbar } from "./Toolbar";

import { style } from "typestyle";
import * as colors from "../styles/colors";

const styles = {
  clr: style({
    color: colors.blue
  })
}

export const CoreLayout: React.StatelessComponent<{}> = ({children}) => (
  <div>
    <Toolbar Something={"Welcome to Portyr"} />
    <h1 className={styles.clr}>Testing Core Layout</h1>
    {children}
  </div>
);
