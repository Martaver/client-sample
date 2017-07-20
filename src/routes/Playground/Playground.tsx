import * as React from "react";
import {Dispatch} from "react-redux";
import { RootState } from "../../store/index";
import { connect } from "../../tools/react-redux-typescript";
import styles from "./Playground.scss";
import * as d3 from "d3";

interface OwnProps { }
interface StateProps { }
interface DispatchProps { }

const mapStateToProps = (s: RootState, p: OwnProps) => ({ });

const mapDispatchToProps = (d: Dispatch<RootState>) => ({ });

class PlaygroundComponent extends React.Component<OwnProps & StateProps & DispatchProps, RootState> {

  constructor(props: OwnProps) {
    super(props);
  }

  someVariable = "blah";

  someFunction() {
    return this.someVariable;
  }

  runD3() {
    d3.select("#d3root").append("span").text("Good morning, Kayla.");
  }

  componentDidMount() {
    this.runD3();
  }

  render() {
    return (
  //This is your playground. Stick within this div:
  <div id="d3root" className={styles.myStyle}></div>
    );
  }
}



export const Playground = connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(PlaygroundComponent);
