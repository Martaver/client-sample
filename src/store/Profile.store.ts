import { reducerWithInitialState } from "typescript-fsa-reducers";
import actionCreatorFactory from "typescript-fsa";
import { Dictionary } from "typescript-collections";
import { Company, Policy, Purpose, PiiType, QueryCompany, QueryResponse, QueryPiiType } from "../types/portyr-api";

import {Method, receive,   send} from '../tools/servicestack';

const actionCreator = actionCreatorFactory("PROFILE");

export const ProfileActions = {
  sendQueryCompanies: send<QueryCompany>("QUERY_COMPANY"),
  receiveQueryCompanies: receive<QueryResponse<Company>>("QUERY_COMPANY"),

  sendQueryPiiType: send<QueryPiiType>("QUERY_PII_TYPE"),
  receiveQueryPiiType: receive<QueryResponse<PiiType>>("QUERY_PII_TYPE"),
};


export type ProfileState = {
  currentCompany?: Company,
  piiTypes?: Dictionary<number, PiiType>,
};

const INITIAL_STATE: ProfileState = {

};

export const ProfileReducer = reducerWithInitialState(INITIAL_STATE)

  .case(ProfileActions.receiveQueryCompanies, (s,p) => ({...s,
    currentCompany: p.results[0]
  }))

  .case(ProfileActions.receiveQueryPiiType, (s, p) => {

    const piiTypes = new Dictionary<number, PiiType>();
    p.results.forEach(piiType => {
      piiTypes.setValue(piiType.id, piiType);
    });
    return {...s,
      piiTypes
    };
  })
;
