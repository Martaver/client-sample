// import { palette } from "../../styles";
import * as React from "react";
import { RootState } from "../../store/index";
import { push } from "react-router-redux";
import { MapStateToPropsParam, MapDispatchToPropsFunction, MapDispatchToPropsParam, MapDispatchToPropsObject, ComponentDecorator } from "react-redux";
import { connect } from "../../tools/react-redux-typescript";

// import { style } from "typestyle";
import { RouteComponentProps } from "react-router";
import { HomeActions } from "../../store/Home.store";

import { Toolbar, FlatButton } from "material-ui";
// import { px, linearGradient, rgba } from "csx/lib";

// const styles = {
//   overlay: style({
//     height: px(600),
//     backgroundImage: linearGradient('to bottom', rgba(0, 111, 128, 0.6), "#00ddff")
//   })
// };

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
    {/* <section className={styles.overlay}></section> */}
    <section>We help</section>
  </div>
));
