import * as React from "react";
import { RootState } from "../../store/index";
import { push } from "react-router-redux";
import { MapStateToPropsParam, MapDispatchToPropsFunction, MapDispatchToPropsParam, MapDispatchToPropsObject, ComponentDecorator } from "react-redux";
import { connect } from "../../tools/react-redux-typescript";

import { RouteComponentProps } from "react-router";
import { HomeActions } from "../../store/Home.store";

import { Toolbar, FlatButton } from "material-ui";
import styles from "./Home.scss";

import header from "./header-bg.png";

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
     <section className={styles.overlay}>Testing something</section>
     <section>
       <div className={styles.aller}>
         We help you to get the ownership on the data that companies have collected about you.
       </div>
     </section>
  </div>
));
