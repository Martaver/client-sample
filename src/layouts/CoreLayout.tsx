import * as React from "react";
import { RootState } from "../store/index";
import { RouteComponentProps } from "react-router";
import { Toolbar } from "./Toolbar";

import { style } from "typestyle";
import { spacing } from "../styles";
import { px, percent, viewHeight } from "csx/lib";
import { flexRoot, flex, content, vertical } from "csstips/lib";
import { Footer } from "./Footer";

const styles = {
  testContent: style({
    $debugName: 'testContent',
    height: px(200),
    margin: px(2),
    padding: px(10)
  }),
  frame: style(vertical, {
    $debugName: 'frame',
    minHeight: viewHeight(100)
  }),
  header: style(content, {

  }),
  body: style(flex, {

  }),
  footer: style(content, {
    bottom: px(0),
    minHeight: px(200)
  })
};

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
