import * as React from "react";

import { RootState } from "../store/index";
import { RouteComponentProps } from "react-router";
import { Dispatch } from "react-redux";
import { connect } from "../tools/react-redux-typescript";

import * as logo from "./logo.svg";

import { style } from "typestyle";
import { url, quote, px } from "csx";

const styles = {
  logo: style({
    backgroundImage: url(quote(logo)),
    backgroundRepeat: "no-repeat",
    height: px(40)
  }),
  toolbar: style({
    height: px(60),
  })
}

interface ToolbarProps {
  Something: string
}

const mapStateToProps = (s: RootState, o: ToolbarProps) => ({

});

const mapDispatchToProps = (d: Dispatch<RootState>) => ({

});

export const Toolbar = connect(mapStateToProps, mapDispatchToProps)(p => (
  <div className={styles.toolbar}>
    <div className={styles.logo} alt="Portyr" />
  </div>
))
