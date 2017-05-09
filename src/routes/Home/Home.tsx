import * as React from "react";
import styles from "./Home.scss";
import * as logo from "./logo.svg";
import { connect } from "react-redux";
import { HomeState } from "./Home.reducer";
import { HomeActions } from "./Home.actions";
import { returntypeof } from "react-redux-typescript";
import { RootState } from "../../store/index";
import { RouteComponentProps } from "react-router";
import { push } from "react-router-redux";

const mapStateToProps = (state: RootState) => ({
  SomeValue: state.home.SomeValue,
});

const mapDispatchToProps = {
  ...HomeActions,
  goFoo: () => push("/foo"),
};

const stateProps = returntypeof(mapStateToProps);
type Props = typeof stateProps & typeof mapDispatchToProps & RouteComponentProps<any> & JSX.Element;

const component: React.StatelessComponent<Props> = (p) => (
  <div>
    <h1 className={styles.clr}>Welcome {p.SomeValue}!</h1>
    <img src={logo} className="app-logo" alt="logo" />
    <button onClick={p.setFran} >Set Fran</button>
    <button onClick={p.setNarf} >Set Narf</button>
    <button onClick={p.goFoo}>Go foo</button>
  </div>
);

export const Home = connect<{}, {}, Props>(mapStateToProps, mapDispatchToProps)(component);
