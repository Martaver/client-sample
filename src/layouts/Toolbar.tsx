import colors from "../styles/colors";
import * as React from "react";

import { RootState } from "../store/index";
import { RouteComponentProps } from "react-router";
import { Dispatch } from "react-redux";
import { connect } from "../tools/react-redux-typescript";

import * as logo from "./logo.svg";

import { style } from "typestyle";
import { url, quote, px } from "csx";
import { Action } from "redux";

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

interface OwnProps {
  Something: string
}

interface StateProps {
  myProperty: string
}

interface DispatchProps {
  doSomething: () => Action;
}

class ToolbarComponent extends React.Component<OwnProps & StateProps & DispatchProps, RootState> {
  render() {
    return (
      <div className={styles.toolbar}>
        {this.props.myProperty}
        {this.props.Something}
        <div className={styles.logo} alt="Portyr" />
      </div>
    )
  }
}

const mapStateToProps = (s: RootState, p: OwnProps) => ({
  myProperty: s.home.SomeValue
});

const mapDispatchToProps = (d: Dispatch<RootState>) => ({
  doSomething: () => ({type: "blah", payload: {}})
});

export const Toolbar = connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(ToolbarComponent)
