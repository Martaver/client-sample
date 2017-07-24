import * as React from "react";

import {RootState} from "../store/index";
import {RouteComponentProps} from "react-router";
import {Dispatch} from "react-redux";
import {connect} from "../tools/react-redux-typescript";

import * as logo from "./logo.svg";
import { Logo } from "./Logo";

import styles from "./Toolbar.scss";

interface OwnProps { }

interface StateProps { }

interface DispatchProps { }

class ToolbarComponent extends React.Component<OwnProps & StateProps & DispatchProps, RootState> {
  render() {
    return (
      <div className={styles.toolbar}>
        <div className={styles.toolbarLeft}>
          <div className={styles.logo}><Logo /></div>
        </div>
        <div className={styles.toolbarCenter}>


        </div>
        <div className={styles.toolbarRight}>
          <a className={styles.btn}>FOR COMPANY</a>

        </div>
        <div className={styles.toolbarRight}>
          <a className={styles.navtext}>LOGIN</a>
        </div>
        <div className={styles.toolbarRight}>
          <a className={styles.navtext}>EN</a>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (s: RootState, p: OwnProps) => ({
  myProperty: s.home.searchText
});

const mapDispatchToProps = (d: Dispatch<RootState>) => ({
  doSomething: () => ({type: "blah", payload: {}})
});

export const Toolbar = connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(ToolbarComponent);
