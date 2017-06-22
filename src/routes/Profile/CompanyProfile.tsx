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

interface IModelCompany extends Company {
  dataTypes: IModelDataType[];
}

interface IModelDataType extends DataType {
  services: IModelService[];
}

interface IModelService extends Service {
  purposes: IModelPurpose[];
}

interface IModelPurpose extends Purpose {

}

const modelSelector = createSelector(
  (s: RootState) => s.profile,
  (profile): IModelCompany => {

    const company = profile.companies.getValue(profile.currentCompanyId);

    const companyServices = _(company.serviceIds)
      .map(id => profile.services.getValue(id))
      .value();

    const companyPurposes = _(companyServices)
      .flatMap(s => s.purposeIds)
      .map(id => profile.purposes.getValue(id))
      .value();

    const companyDataTypes = _(companyPurposes)
      .flatMap(p => p.dataTypeIds)
      .uniq()
      .map(id => profile.dataTypes.getValue(id))
      .value();

    const getServicesByDataType = (dataTypeId: number) => _(companyServices)
      .filter(s => s.purposeIds
        .map(id => profile.purposes.getValue(id))
        .filter(p => p.dataTypeIds.includes(dataTypeId))
        .length > 0
      )
      .value();

    const getPurposesByServiceAndDataType = (service: Service, dataTypeId: number) => _(service.purposeIds)
      .map(id => profile.purposes.getValue(id))
      .filter(p => p.dataTypeIds.includes(dataTypeId))
      .value();

    return ({
      ...(company),
      dataTypes: companyDataTypes
        .map(dataType => ({
          ...dataType,
          services: getServicesByDataType(dataType.id)
            .map(service => ({
              ...service,
              purposes: getPurposesByServiceAndDataType(service, dataType.id)
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

export const CompanyProfile = connect(mapStateToProps, mapDispatchToProps)(p => {

  const renderDataType = (dataType: IModelDataType) => (
    <div key={dataType.id}>
      <h2>
        {dataType.name}
      </h2>
      { dataType.services.map(renderService) }
    </div>
  );

  const renderPurpose = (purpose: IModelPurpose) => (
    <li key={purpose.id}>
      {purpose.name}
    </li>
  );

  const renderService = (service: IModelService) => (
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
