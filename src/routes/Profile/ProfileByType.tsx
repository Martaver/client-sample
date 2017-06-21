import colors from "../../styles/colors";
import * as React from "react";
import { RootState } from "../../store/index";
import { push } from "react-router-redux";
import { connect } from "../../tools/react-redux-typescript";

import { style } from "typestyle";
import { RouteComponentProps } from "react-router";
import { ProfileActions, Service, Purpose, Company, DataType } from "../../store/Profile.store";

import * as _ from "lodash";

import { createSelector } from "reselect";
import { companySelector } from "./Profile";

interface ICompanyModel extends Company {
  dataTypes: IDataTypeModel[];
}

interface IDataTypeModel extends DataType {
  services: IServiceModel[];
}

interface IServiceModel extends Service {
  purposes: IPurposeModel[];
}

interface IPurposeModel extends Purpose {

}



const modelSelector = createSelector(
  (s: RootState) => s.profile,
  (profile): ICompanyModel => {

    const company = profile.companies.getValue(profile.currentCompanyId);

    const allServices = _(company.serviceIds)
      .map(id => profile.services.getValue(id))
      .value();

    const allPurposes = _(allServices)
      .flatMap(s => s.purposeIds)
      .map(id => profile.purposes.getValue(id))
      .value();

    return ({
      ...(company),
      dataTypes: _(allPurposes)
        .flatMap(p => p.dataTypeIds)
        .uniq()
        .map(id => profile.dataTypes.getValue(id))
        .map(dataType => ({
          ...dataType,
          services: _(allServices)
            .filter(s => s.purposeIds
              .map(id => profile.purposes.getValue(id))
              .filter(p => p.dataTypeIds.includes(dataType.id))
              .length > 0
            )
            .map(service => ({
              ...service,
              purposes: _(service.purposeIds)
                .map(id => profile.purposes.getValue(id))
                .filter(p => p.dataTypeIds.includes(dataType.id))
                .value()
            }))
            .value()
        }))
        .value()
    });
  }
);

const styles = {
  welcome: style({
    color: colors.redDark
  })
};

interface ProfileByTypeProps {

}

const mapStateToProps = (state: RootState, own: ProfileByTypeProps) => ({
  company: modelSelector(state),
  services: state.profile.services,
  purposes: state.profile.purposes,
  dataTypes: state.profile.dataTypes,
});

const mapDispatchToProps = ({
  ...ProfileActions
});

export const ProfileByType = connect(mapStateToProps, mapDispatchToProps)(p => {

  const renderDataType = (dataType: IDataTypeModel) => (
    <div>
      <h2 key={dataType.id}>
        {dataType.name}
      </h2>
      { dataType.services.map(renderService) }
    </div>
  );

  const renderPurpose = (purpose: IPurposeModel) => (
    <li key={purpose.id}>
      {purpose.name}
    </li>
  );

  const renderService = (service: IServiceModel) => (
    <div key={service.id}>
      <h3>{service.name}</h3>
      <ul>{ service.purposes.map(renderPurpose) }</ul>
    </div>
  );

  return (
    <div>
      <h1 className={styles.welcome}>{p.company.name}</h1>
      { p.company.dataTypes.map(renderDataType) }
    </div>
  );
});
