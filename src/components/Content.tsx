import * as React from "react";
import {Dispatch} from "react-redux";
import { RootState } from "../store/index";
import { connect } from "../tools/react-redux-typescript";
import styles from "./Content.scss";
import * as d3 from "d3";

interface OwnProps { }

const mapStateToProps = (s: RootState, p: OwnProps) => ({ });

const mapDispatchToProps = (d: Dispatch<RootState>) => ({ });

export const Content = connect(mapStateToProps, mapDispatchToProps)(({children}) => (
  <div className={styles.container}>
    <div className={styles.content}>
      {children}
    </div>
  </div>
));
