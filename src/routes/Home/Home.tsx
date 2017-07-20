import * as React from "react";
import {RootState} from "../../store/index";
import {push} from "react-router-redux";
import {connect} from "../../tools/react-redux-typescript";

import {RouteComponentProps} from "react-router";
import {HomeActions} from "../../store/Home.store";

import styles from "./Home.scss";

import header from "./header-bg.png";
<<<<<<< HEAD

=======
import { FlatButton } from "material-ui";
>>>>>>> 5bb077240b2c72c764c318c33a30ee8e0e96143a

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
<<<<<<< HEAD
    <section className={styles.hero}>
      <div className={styles.QuestionsAboutData}>Questions about Data Protection?</div>
    </section>

    <section>
      <div className={styles.aller}>

        <div className={styles.sessionbase1}>
          <div className={styles.herotextright}>
            We help you to get the ownership on the data that companies have collected about you.
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
=======
     <section className={styles.hero}>
       <h1>Something</h1>
       <FlatButton>Testing</FlatButton>
     </section>

     <section>
       <div className={styles.aller}>
         We help you to get the ownership on the data that companies have collected about you.
       </div>
     </section>
>>>>>>> 5bb077240b2c72c764c318c33a30ee8e0e96143a
  </div>
));
