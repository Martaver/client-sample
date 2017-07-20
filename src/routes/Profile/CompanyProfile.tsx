// import { palette } from "../../styles";
import * as React from "react";
import { RootState } from "../../store/index";
import { push } from "react-router-redux";
import { connect } from "../../tools/react-redux-typescript";

// import { style } from "typestyle";
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

// const styles = {
//   welcome: style({
//     color: palette.redDark
//   }),
//   link: style({
//     textDecoration: 'underline',
//     cursor: 'pointer'
//   })
// };

interface ProfileByTypeProps {

}

const mapStateToProps = (state: RootState, own: ProfileByTypeProps) => ({
  company: modelSelector(state)
});

const mapDispatchToProps = ({
  goService: (id: number) => push(`/company/service/${id}`),
  ...ProfileActions
});

export const CompanyProfile = connect(mapStateToProps, mapDispatchToProps)(p => {

  const renderDataType = (dataType: IModelDataType) => (
    <div key={dataType.id}>
      <b>{dataType.name}</b> collected by:
      <ul>{ dataType.services.map(renderService) }</ul>
    </div>
  );

  const renderService = (service: IModelService) => (
    <li key={service.id}>
      {/* <span className={styles.link} onClick={ () => p.goService(service.id) }>{service.name}</span> for: */}
      <ul>{ service.purposes.map(renderPurpose) }</ul>
    </li>
  );

  const renderPurpose = (purpose: IModelPurpose) => (
    <li key={purpose.id}>
      {purpose.name}
    </li>
  );

  return (
    <div>
      { p.company.dataTypes.map(renderDataType) }
    </div>
  );
});
