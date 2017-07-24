import * as React from "react";
import { RootState } from "../../store/index";
import { push } from "react-router-redux";
import { connect } from "../../tools/react-redux-typescript";

import { RouteComponentProps } from "react-router";
import { ProfileActions } from "../../store/Profile.store";

import * as _ from "lodash";

import styles from "./index.scss";

import { Content } from "../../components/Content";
import { Company, PiiType, Policy, Purpose } from "../../types/portyr-api";

interface ProfileByTypeProps {

}

const mapStateToProps = (state: RootState, own: ProfileByTypeProps) => ({
  company: state.profile.currentCompany,
  piiTypes: state.profile.piiTypes,
});

const mapDispatchToProps = ({
  goService: (id: number) => push(`/company/service/${id}`),
  ...ProfileActions
});

export const CompanyProfile = connect(mapStateToProps, mapDispatchToProps)(p => {

  return (
    <Content>
      { p.company && p.company.policies.map(policy => (
        <div key={policy.id}>
          <h2>{policy.name}</h2>
            {policy.purposes.map(purpose => (
              <div key={purpose.name}>
                <h3>{purpose.name}</h3>
                <p>{purpose.description}</p>
                <p>To do this, we collect:</p>
                <ul>
                  {purpose.dataTypeIds.map(id => {
                    if(p.piiTypes) {
                      const dt = p.piiTypes.getValue(id);
                      return (
                        <li key={id}>{dt.name}</li>
                      );
                    }
                    else return (
                      <li key={id}>{id}</li>
                    );
                  })}
                  </ul>
              </div>
            ))}
        </div>
      )) }
    </Content>
  );
});
