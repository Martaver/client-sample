import * as React from "react";
import {RootState} from "../../store/index";
import {push} from "react-router-redux";
import {connect} from "../../tools/react-redux-typescript";

import {RouteComponentProps} from "react-router";
import {HomeActions} from "../../store/Home.store";

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
      <div className={styles.QuestionsAboutData}>
        Questions about Data Protection?
      </div>
      <div className={styles.mainSearch}>
        <div className={styles.icon} />
        <input placeholder="Search companies or ask about GDPR"></input>
      </div>
    </section>

    <section>
      <div className={styles.aller}>

        <div className={styles.sessionbase1}>
          <div className={styles.herotextright}>
            <span style={{fontWeight: "bold"}}>We help you</span> to get the ownership on the data that companies have collected about you.
          </div>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <div className={styles.flowpic}>
          </div>

        </div>
      </div>
    </section>
    <section>
      <div className={styles.aller}>

        <div className={styles.sessionbase2}>
          <div className={styles.herotextleft}>
            We help the companies to make it easy to obey the data protection
            regulation (GDPR).
          </div>
          <br/><br/><br/><br/><br/><br/><br/>
          <div className={styles.flowpic2}>
          </div>

        </div>
      </div>
    </section>

  </div>
));
