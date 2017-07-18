import * as React from "react";
import { RootState } from "../store/index";
import { RouteComponentProps } from "react-router";
import { Toolbar } from "./Toolbar";

import { style } from "typestyle";
import { spacing } from "../styles";
import { px, percent, viewHeight } from "csx/lib";
import { flexRoot, flex, content, vertical } from "csstips/lib";
import { Footer } from "./Footer";

import styles from "./CoreLayout.scss";

export const CoreLayout: React.StatelessComponent<{}> = ({children}) => (
  <div className={styles.frame}>
    <div className={styles.header}>
      <Toolbar Something={"Welcome to Portyr"} />
    </div>
    <div className={styles.body}>
      {children}
    </div>
    <div className={styles.footer}>
      <Footer />
    </div>
  </div>
);
