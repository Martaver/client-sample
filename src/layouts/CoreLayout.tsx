import * as React from "react";
import { RootState } from "../store/index";
import { RouteComponentProps } from "react-router";
import { Toolbar } from "./Toolbar";

import { style } from "typestyle";
import { spacing } from "../theme";
import { px } from "csx/lib";

const styles = {
  container: style({
    $debugName: 'container',
    width: px(960),
    margin: 'auto',
    padding: spacing.padding
  }),
};

export const CoreLayout: React.StatelessComponent<{}> = ({children}) => (
  <div>
    <Toolbar Something={"Welcome to Portyr"} />
    <div className={ styles.container } >
      {children}
    </div>
  </div>
);
