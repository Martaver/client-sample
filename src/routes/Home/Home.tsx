import * as React from "react";
import styles from "./Home.scss";
import * as logo from "./logo.svg";
import { HomeState } from "./Home.reducer";
import { HomeActions } from "./Home.actions";
import { RootState } from "../../store/index";
import { push } from "react-router-redux";
import { Toolbar } from "./Toolbar";
import { connect } from "react-redux";

const mapStateToProps = (state: RootState) => ({
  SomeValue: state.home.SomeValue,
});

const mapDispatchToProps = (d: Function) => ({
  ...HomeActions,
  goFoo: () => push("/foo"),
});

export const Home = connect(mapStateToProps, mapDispatchToProps)(p => (
  <div>
    <h1 className={styles.clr}>Welcome {p.SomeValue}!</h1>
    <h2>Something else awesome!</h2>
    <Toolbar Something={"Some bullshit in the toolbar"} />
    <img src={logo} className="app-logo" alt="logo" />
    <button onClick={p.setFran} >Set Franks</button>
    <button onClick={p.setNarf} >Set Narf</button>
    <button onClick={p.goFoo}>I'm hungry</button>
  </div>
));
