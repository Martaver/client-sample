import colors from "../../styles/colors";
import * as React from "react";
import { RootState } from "../../store/index";
import { push } from "react-router-redux";
import { MapStateToPropsParam, MapDispatchToPropsFunction, MapDispatchToPropsParam, MapDispatchToPropsObject, ComponentDecorator } from "react-redux";
import { connect } from "../../tools/react-redux-typescript";

import { style } from "typestyle";
import { RouteComponentProps, Switch, Route } from "react-router";
import { ProfileActions } from "../../store/Profile.store";

import { Toolbar, FlatButton } from "material-ui";
import { CompanyProfile } from "./CompanyProfile";
import { ServiceProfile } from "./ServiceProfile";

const styles = {
  welcome: style({
    color: colors.redDark
  })
};

interface ProfileProps {

}

const mapStateToProps = (state: RootState, own: ProfileProps) => ({

});

const mapDispatchToProps = ({
  ...ProfileActions,
});

export const Profile = connect(mapStateToProps, mapDispatchToProps)(p => (
  <Switch>
    {/* Update this to be relative, not absolute.*/}
    <Route path="/company" exact={true} component={CompanyProfile as any} />
    <Route path="/company/service/{:serviceId}" component={ServiceProfile as any} />
  </Switch>
));
