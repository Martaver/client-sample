import colors from "../../styles/colors";
import * as React from "react";
import { RootState } from "../../store/index";
import { push } from "react-router-redux";
import { connect } from "../../tools/react-redux-typescript";

import { style } from "typestyle";
import { RouteComponentProps } from "react-router";
import { ProfileActions, Service, Purpose, Company, DataType } from "../../store/Profile.store";

import { flatMap, uniqBy } from "lodash";

import { createSelector } from "reselect";
import { companySelector } from "./Profile";
import * as Enumerable from "linq-es2015";

interface ICompanyModel extends Company {
  dataTypes: IDataTypeModel[];
}

interface IDataTypeModel extends DataType {
  services: Service[];
}

interface IServiceModel extends Service {
  // purposes: IPurposeModel[];
}

interface IPurposeModel extends Purpose {

}



const modelSelector = createSelector(
  (s: RootState) => s.profile,
  (profile): ICompanyModel => {

    const company = profile.companies.getValue(profile.currentCompanyId);

    const allDataTypes = [];

    const getServicesContainingDataType = () => [];
    const getPurposesContainingDataType = () => [];

    return ({
      ...(company),
      dataTypes: []
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
    <h2 key={dataType.id}>
      {dataType.name}
      { dataType.services.map(renderService) }
    </h2>
  );

  // const renderPurpose = (purpose: IPurpose) => (
  //   <div key={purpose.id}>
  //     <h3>{purpose.name}</h3>
  //     <ul>
  //       { purpose.dataTypeIds.map(id => p.dataTypes[id]).map(renderDataType)}
  //     </ul>
  //   </div>
  // );

  const renderService = (service: IServiceModel) => (
    <div key={service.id}>
      <h3>{service.name}</h3>
      {/*{ service.purposeIds.map(id => p.purposes[id]).map(renderPurpose) }*/}
    </div>
  );

  return (
    <div>
      <h1 className={styles.welcome}>{p.company.name}</h1>
      { p.company.dataTypes.map(renderDataType) }
    </div>
  );
});
