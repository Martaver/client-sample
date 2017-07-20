import * as React from "react";
import { RootState } from "../../store/index";
import { push } from "react-router-redux";
import { MapStateToPropsParam, MapDispatchToPropsFunction, MapDispatchToPropsParam, MapDispatchToPropsObject, ComponentDecorator } from "react-redux";
import { connect } from "../../tools/react-redux-typescript";

import { RouteComponentProps, Switch, Route } from "react-router";
import { ProfileActions } from "../../store/Profile.store";

import { Toolbar, FlatButton } from "material-ui";
import { CompanyProfile } from "./CompanyProfile";
import { ServiceProfile } from "./ServiceProfile";

// const styles = {
//   welcome: style({
//     color: palette.redDark
//   }),
//   link: style({
//     textDecoration: 'underline',
//     cursor: 'pointer'
//   })
// };

interface ProfileProps {

}

const mapStateToProps = (state: RootState, own: ProfileProps) => ({
  company: state.profile.companies.getValue(state.profile.currentCompanyId)
});

const mapDispatchToProps = ({
  goCompany: () => push(`/company`),
  ...ProfileActions,
});

export const Profile = connect(mapStateToProps, mapDispatchToProps)(p => (
  <div>
    {/* <h1 onClick={ p.goCompany } className={styles.link}>{p.company.name}</h1> */}
    <Switch>
      {/* Update this to be relative, not absolute.*/}
      <Route path="/company" exact={true} component={CompanyProfile as any} />
      <Route path="/company/data-type/:dataTypeId" exact={true} component={CompanyProfile as any} />
      <Route path="/company/service/:serviceId" component={ ServiceProfile } />
    </Switch>
  </div>
));

export default Profile;
