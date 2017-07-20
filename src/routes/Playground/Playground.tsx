import * as React from "react";
import {Dispatch} from "react-redux";
import { RootState } from "../../store/index";
import { connect } from "../../tools/react-redux-typescript";
import styles from "./Playground.scss";

interface OwnProps { }
interface StateProps { }
interface DispatchProps { }

const mapStateToProps = (s: RootState, p: OwnProps) => ({ });

const mapDispatchToProps = (d: Dispatch<RootState>) => ({ });

class PlaygroundComponent extends React.Component<OwnProps & StateProps & DispatchProps, RootState> {

  someVariable = "blah";

  someFunction() {
    return this.someVariable;
  }

  render() {
    return (
  //This is your playground. Stick within this div:
  <div>
    Hello Kayla... { this.someFunction() }
  </div>
    );
  }
}



export const Playground = connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(PlaygroundComponent);
