import { palette } from "../../theme";
import * as React from "react";
import { RootState } from "../../store/index";
import { push } from "react-router-redux";
import { MapStateToPropsParam, MapDispatchToPropsFunction, MapDispatchToPropsParam, MapDispatchToPropsObject, ComponentDecorator } from "react-redux";
import { connect } from "../../tools/react-redux-typescript";

import { style } from "typestyle";
import { RouteComponentProps } from "react-router";
import { HomeActions } from "../../store/Home.store";

import { Toolbar, FlatButton } from "material-ui";

const styles = {
  welcome: style({
    color: palette.redDark
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
    <FlatButton>Click me!</FlatButton>
    <h1 className={styles.welcome}>Welcome {p.SomeValue}!</h1>

  </div>
));
