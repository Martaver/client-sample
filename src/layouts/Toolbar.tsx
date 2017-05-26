import * as React from "react";

import { RootState } from "../store/index";
import { RouteComponentProps } from "react-router";
import { Dispatch } from "react-redux";
import { connect } from "../tools/react-redux-typescript";

import * as logo from "./logo.svg";

import s from "./Toolbar.scss"

import { style } from "typestyle";
import { px, url } from "csx";

const styles = {
  toolbar: style({
    top: 0,
    left: 0,
    right: 0,
    height: px(60),
  }),
  logo: style({
    height: px(40),
    backgroundImage: url(`"${logo}"`),
    backgroundRepeat: "no-repeat",
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
    <div className={s.logo} alt="Portyr" />
    <div className={styles.logo} alt="Portyr" />
    Testing: {p.Something}
  </div>
))
