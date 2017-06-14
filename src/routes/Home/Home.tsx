import colors from "../../styles/colors";
import * as React from "react";
import { HomeActions } from "./Home.actions";
import { RootState } from "../../store/index";
import { push } from "react-router-redux";
import { MapStateToPropsParam, MapDispatchToPropsFunction, MapDispatchToPropsParam, MapDispatchToPropsObject, ComponentDecorator } from "react-redux";
import { connect } from "../../tools/react-redux-typescript";

import { style } from "typestyle";
import { RouteComponentProps } from "react-router";

const styles = {
  welcome: style({
    color: colors.redDark
  })
};

interface HomeProps {

}

const mapStateToProps = (state: RootState, own: HomeProps) => ({
  SomeValue: state.home.SomeValue,
});

const mapDispatchToProps = ({
  ...HomeActions,
  goFoo: () => push("/foo"),
});

export const Home = connect(mapStateToProps, mapDispatchToProps)(p => (
  <div>
    <h1 className={styles.welcome}>Welcome {p.SomeValue}!</h1>
    <h2>Something else awesome!</h2>
    <button onClick={() => p.setNarf({someString: "blah"})} >Set Narf</button>
    <button onClick={() => p.setFran({someNumber: 1})} >Set Fran</button>
    <button onClick={p.goFoo}>Go Foo</button>
  </div>
));
