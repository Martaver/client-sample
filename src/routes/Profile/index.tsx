import * as React from "react";
import { RootState } from "../../store/index";
import { push } from "react-router-redux";
import { MapStateToPropsParam, MapDispatchToPropsFunction, MapDispatchToPropsParam, MapDispatchToPropsObject, ComponentDecorator } from "react-redux";
import { connect } from "../../tools/react-redux-typescript";

import { RouteComponentProps, Switch, Route } from "react-router";
import { ProfileActions } from "../../store/Profile.store";

import { CompanyProfile } from "./CompanyProfile";

import styles from "./index.scss";
import { Company, QueryCompany, PiiType, QueryPiiType } from "../../types/portyr-api";

interface ProfileProps {

}

const mapStateToProps = (state: RootState, own: ProfileProps) => ({
  company: state.profile.currentCompany,
  dataTypes: state.profile.piiTypes,
});

const mapDispatchToProps = ({
  goCompany: () => push(`/company`),
  ...ProfileActions,
});

export const Profile = connect(mapStateToProps, mapDispatchToProps)(p => {
  if(!p.company) p.sendQueryCompanies(new QueryCompany());
  if(!p.dataTypes) p.sendQueryPiiType(new QueryPiiType());
  return (
    <div>
      {
        p.company &&
        <div>
          <h1 onClick={ p.goCompany } className={styles.link}>{p.company.name}</h1>
          <Switch>
            {/* Update this to be relative, not absolute.*/}
            <Route path="/company" exact={true} component={CompanyProfile as any} />
            <Route path="/company/data-type/:dataTypeId" exact={true} component={CompanyProfile as any} />
          </Switch>
        </div>
      }
    </div>
  );
});

export default Profile;
