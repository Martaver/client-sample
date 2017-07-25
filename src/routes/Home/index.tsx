import * as React from "react";
import {RootState} from "../../store/index";
import {push} from "react-router-redux";
import {connect} from "../../tools/react-redux-typescript";

import {RouteComponentProps} from "react-router";
import {HomeActions} from "../../store/Home.store";

interface HomeProps {

}

const mapStateToProps = (state: RootState, own: HomeProps) => ({
  ...state.home
});

const mapDispatchToProps = ({
  ...HomeActions,
});

export const Home = connect(mapStateToProps, mapDispatchToProps)(p => (
  <div>

    Hello world

  </div>
));
