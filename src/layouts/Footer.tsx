import * as React from "react";

import { RootState } from "../store/index";
import { RouteComponentProps } from "react-router";
import { Dispatch } from "react-redux";
import { connect } from "../tools/react-redux-typescript";

import * as logo from "./logo.svg";

import { Action } from "redux";

import styles from "./Footer.scss";

interface FooterProps { }

interface StateProps { }

interface DispatchProps { }

class FooterComponent extends React.Component<FooterProps & StateProps & DispatchProps, RootState> {
  render() {
    return (
      <div>
        <hr />
         <div className={styles.itemContainer}>
          <div className={styles.gutter} />
          <div className={styles.item}>WE ARE HERE TO HELP YOU</div>
          <div className={styles.item}>About Portyr</div>
          <div className={styles.item}>Contact information</div>
          <div className={styles.item}>Terms and Conditions</div>
          <div className={styles.gutter} />
        </div>
        <div className={styles.bottomLine}>
          <div>© PORTYR 2017</div>
          <div className={styles.social}>
            <div className={styles.circle} />
            <div className={styles.circle} />
            <div className={styles.circle} />
            <div className={styles.circle} />
            <div className={styles.circle} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (s: RootState, p: FooterProps) => ({ });

const mapDispatchToProps = (d: Dispatch<RootState>) => ({ });

export const Footer = connect<StateProps, DispatchProps, FooterProps>(mapStateToProps, mapDispatchToProps)(FooterComponent);
