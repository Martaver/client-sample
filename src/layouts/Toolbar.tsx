import { palette, spacing } from "../theme";
import * as React from "react";

import { RootState } from "../store/index";
import { RouteComponentProps } from "react-router";
import { Dispatch } from "react-redux";
import { connect } from "../tools/react-redux-typescript";

import * as logo from "./logo.svg";

import { style } from "typestyle";
import { url, quote, px, percent } from "csx";
import { Action } from "redux";
import { flexRoot, content, flex } from "csstips/lib";

const styles = {
  logo: style({
    $debugName: 'logo',
    backgroundImage: url(quote(logo)),
    backgroundRepeat: "no-repeat",
    height: px(24)
  }),
  toolbar: style(flexRoot, {
    $debugName: 'toolbar',
    height: px(60),
    top: 0,
    left: 0,
    right: 0,
    width: percent(100),
    padding: spacing.padding
  }),
  toolbarLeft: style(content, {
    width: px(200)
  }),
  toolbarCenter: style(flex, {

  }),
  toolbarRight: style(content, {
    width: px(200)
  })
};

interface OwnProps {
  Something: string;
}

interface StateProps {
  myProperty: string;
}

interface DispatchProps {
  doSomething: () => Action;
}

class ToolbarComponent extends React.Component<OwnProps & StateProps & DispatchProps, RootState> {
  render() {
    return (
      <div className={styles.toolbar}>
        <div className={styles.toolbarLeft} ><div className={styles.logo} alt="Portyr" /></div>
        <div className={styles.toolbarCenter}></div>
        <div className={styles.toolbarRight}></div>
      </div>
    );
  }
}

const mapStateToProps = (s: RootState, p: OwnProps) => ({
  myProperty: s.home.SomeValue
});

const mapDispatchToProps = (d: Dispatch<RootState>) => ({
  doSomething: () => ({type: "blah", payload: {}})
});

export const Toolbar = connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(ToolbarComponent);
