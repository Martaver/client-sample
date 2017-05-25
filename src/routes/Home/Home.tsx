import * as React from "react";
import styles from "./Home.scss";
import * as logo from "./logo.svg";
import { HomeState } from "./Home.reducer";
import { HomeActions } from "./Home.actions";
import { RootState } from "../../store/index";
import { push } from "react-router-redux";
import { Toolbar } from "./Toolbar";
import { MapStateToPropsParam, MapDispatchToPropsFunction, MapDispatchToPropsParam, MapDispatchToPropsObject, ComponentDecorator } from "react-redux";
import { connect } from "../../tools/react-redux-typescript";

interface HomeProps {

}

const mapStateToProps = (state: RootState, own: HomeProps) => ({
  SomeValue: state.home.SomeValue,
});

const mapDispatchToProps = {
  ...HomeActions,
  goFoo: () => push("/foo"),
};

// const mapDispatchToProps = {
//   ...HomeActions,
//   goFoo: () => push("/foo"),
// };

export const Home = connect(mapStateToProps, mapDispatchToProps)(p => (
  <div>
    <h1 className={styles.clr}>Welcome {p.SomeValue}!</h1>
    <h2>Something else awesome!</h2>
    <Toolbar Something={"Welcome to Portyr"} />
    <img src={logo} className="app-logo" alt="logo" />
    <button onClick={p.setFran} >Set Narf</button>
    <button onClick={p.setNarf} >Set Fran</button>
    <button onClick={p.goFoo}>Go Foo</button>
  </div>
));
