import * as React from "react";
import { RootState } from "../../store/index";
import { push } from "react-router-redux";
import { connect } from "../../tools/react-redux-typescript";

import { RouteComponentProps } from "react-router";
import { HomeActions } from "../../store/Home.store";

import styles from "./Home.scss";

import header from "./header-bg.png";
import { FlatButton } from "material-ui";

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
     <section className={styles.hero}>
       <h1>Something</h1>
       <FlatButton>Testing</FlatButton>
     </section>

     <section>
       <div className={styles.aller}>
         We help you to get the ownership on the data that companies have collected about you.
       </div>
     </section>
  </div>
));
