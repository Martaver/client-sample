import * as React from "react";
import { RootState } from "../../store/index";
import { push } from "react-router-redux";
import { connect } from "../../tools/react-redux-typescript";

import { RouteComponentProps } from "react-router";
import { ProfileActions, Service, Purpose, Company, DataType } from "../../store/Profile.store";

import { createSelector } from "reselect";
import { Content } from "../../components/Content";

interface IModelCompany extends Company {
  services: IModelService[];
}

interface IModelService extends Service {
  purposes: IModelPurpose[];
}

interface IModelPurpose extends Purpose {
  dataTypes: IModelDataType[];
}

interface IModelDataType extends DataType {
}

const modelSelector = createSelector(
  (s: RootState) => s.profile,
  (profile) : IModelCompany => {
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

interface ProfileProps extends RouteComponentProps<{serviceId: number}> {

}

const mapStateToProps = (state: RootState, own: ProfileProps) => ({
  service: modelSelector(state).services.find(s => s.id == own.match.params.serviceId)
});

const mapDispatchToProps = ({
  ...ProfileActions
});

export const ServiceProfile = connect(mapStateToProps, mapDispatchToProps)(p => {

  const renderDataType = (dataType: IModelDataType) => (
    <li key={dataType.id}>
      {dataType.name}
    </li>
  );

  const renderPurpose = (purpose: IModelPurpose) => (
    <div key={purpose.id}>
      <h3>{purpose.name}</h3>
      <p>{purpose.explanation}</p>
      For the purpose of <b>{purpose.name}</b>, we collect:
      <ul>
        { purpose.dataTypes.map(renderDataType)}
      </ul>
    </div>
  );

  return (
    <Content>
      { p.service && (
        <div>
          <h2>{p.service.name}</h2>
          <p>{p.service.description}</p>
          { p.service.purposes.map(renderPurpose) }
        </div>
      )}
    </Content>
  );
});
