import * as React from "react";
import styles from "./Home.scss";
import * as logo from "./logo.svg";
import { HomeState } from "./Home.reducer";
import { HomeActions } from "./Home.actions";
import { RootState } from "../../store/index";
import { push } from "react-router-redux";
import { stateless } from "../../tools/react-redux";

const mapStateToProps = (state: RootState) => ({
  SomeValue: state.home.SomeValue,
});

const mapDispatchToProps = {
  ...HomeActions,
  goFoo: () => push("/foo"),
};

export const Home = stateless(mapStateToProps, mapDispatchToProps)((p) => (
  <div>
    <h1 className={styles.clr}>Welcome {p.SomeValue}!</h1>
    <h2>Something new!</h2>
    <img src={logo} className="app-logo" alt="logo" />
    <button onClick={p.setFran} >Set Fran</button>
    <button onClick={p.setNarf} >Set Narf</button>
    <button onClick={p.goFoo}>I'm hungry</button>
  </div>
));
