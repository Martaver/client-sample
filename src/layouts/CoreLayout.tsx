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
  /**
   * A vertical flexbox layout that stretches its content at least as high as the display window.
   */
  frame: style(vertical, {
    $debugName: 'frame',
    minHeight: viewHeight(100)
  }),

  /**
   *
   */
  header: style({
    position: 'absolute',
    width: percent(100)
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
