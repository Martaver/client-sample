import colors from "../../styles/colors";
import * as React from "react";
import { HomeState } from "./Home.reducer";
import { HomeActions } from "./Home.actions";
import { RootState } from "../../store/index";
import { push } from "react-router-redux";
import { MapStateToPropsParam, MapDispatchToPropsFunction, MapDispatchToPropsParam, MapDispatchToPropsObject, ComponentDecorator } from "react-redux";
import { connect } from "../../tools/react-redux-typescript";

import { style } from "typestyle";

const styles = {
  welcome: style({
    color: colors.red
  })
}

interface HomeProps {
  myOptions: string
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
    <button onClick={p.setFran} >Set Narf</button>
    <button onClick={p.setNarf} >Set Fran</button>
    <button onClick={p.goFoo}>Go Foo</button>
  </div>
));
