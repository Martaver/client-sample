import * as React from "react";

import { RootState } from "../store/index";
import { RouteComponentProps } from "react-router";
import { Dispatch } from "react-redux";
import { connect } from "../tools/react-redux-typescript";

import * as logo from "./logo.svg";

import s from "./Toolbar.scss"

interface ToolbarProps {
  Something: string
}

const mapStateToProps = (s: RootState, o: ToolbarProps) => ({

});

const mapDispatchToProps = (d: Dispatch<RootState>) => ({

});

export const Toolbar = connect(mapStateToProps, mapDispatchToProps)(p => (
  <div className={s.toolbar}>
    <div className={s.logo} alt="Portyr" />
    Testing: {p.Something}
  </div>
))
