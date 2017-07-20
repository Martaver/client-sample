import * as React from "react";

import {RootState} from "../store/index";
import {RouteComponentProps} from "react-router";
import {Dispatch} from "react-redux";
import {connect} from "../tools/react-redux-typescript";



import * as logo from "./logo.svg";

import {Action} from "redux";

import styles from "./Toolbar.scss";

import { Button } from "react-bootstrap";

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
        <div className={styles.toolbarLeft}>
          <div className={styles.logo} alt="Portyr"/>
        </div>
        <div className={styles.toolbarCenter}>


        </div>
        <div className={styles.toolbarRight}>
          <a className={styles.btn}>for company</a>

        </div>
        <div className={styles.toolbarRight}>LOGIN</div>
        <div className={styles.toolbarRight}>en</div>



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
