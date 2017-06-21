import colors from "../../styles/colors";
import * as React from "react";
import { RootState } from "../../store/index";
import { push } from "react-router-redux";
import { connect } from "../../tools/react-redux-typescript";

import { style } from "typestyle";
import { RouteComponentProps } from "react-router";
import { ProfileActions, Service, Purpose, Company, DataType } from "../../store/Profile.store";

import { createSelector } from "reselect";

interface ICompanyModel extends Company {
  services: IServiceModel[];
}

interface IServiceModel extends Service {
  purposes: IPurposeModel[];
}

interface IPurposeModel extends Purpose {
  dataTypes: IDataTypeModel[];
}

interface IDataTypeModel extends DataType {
}

export const companySelector = createSelector(
  (s: RootState) => s.profile,
  (profile) : ICompanyModel => {
    const company = profile.companies.getValue(profile.currentCompanyId);
    return ({
      ...company,
      services: company.serviceIds.map(id => profile.services.getValue(id)).map(service => ({
        ...service,
        purposes: service.purposeIds.map(id => profile.purposes.getValue(id)).map(purpose => ({
          ...purpose,
          dataTypes: purpose.dataTypeIds.map(id => profile.dataTypes.getValue(id)).map(dataType => ({
            ...dataType
          }))
        }))
      }))
    });
  }
);

const styles = {
  welcome: style({
    color: colors.redDark
  })
};

interface ProfileProps {

}

const mapStateToProps = (state: RootState, own: ProfileProps) => ({
  company: companySelector(state),
  services: state.profile.services,
  purposes: state.profile.purposes,
  dataTypes: state.profile.dataTypes,
});

const mapDispatchToProps = ({
  ...ProfileActions
});

export const Profile = connect(mapStateToProps, mapDispatchToProps)(p => {

  const renderDataType = (dataType: IDataTypeModel) => (
    <li key={dataType.id}>
      {dataType.name}
    </li>
  );

  const renderPurpose = (purpose: IPurposeModel) => (
    <div key={purpose.id}>
      <h3>{purpose.name}</h3>
      <ul>
        { purpose.dataTypes.map(renderDataType)}
      </ul>
    </div>
  );

  const renderService = (service: IServiceModel) => (
    <div key={service.id}>
      <h2>{service.name}</h2>
      { service.purposes.map(renderPurpose) }
    </div>
  );

  return (
    <div>
      <h1 className={styles.welcome}>{p.company.name}!</h1>
      { p.company.services.map(renderService) }
    </div>
  );
});
