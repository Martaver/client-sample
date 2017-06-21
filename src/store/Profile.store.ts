import { reducerWithInitialState } from "typescript-fsa-reducers";
import actionCreatorFactory from "typescript-fsa";
import { Dictionary } from "typescript-collections";
const actionCreator = actionCreatorFactory("PROFILE");

const blah = new Dictionary<number, string>();

export const ProfileActions = {

};

export class Company {
  id: number;
  name: string;
  serviceIds: number[];
}

export class Service {
  id: number;
  companyId: number;
  name: string;
  purposeIds: number[];
}

export class Purpose {
  id: number;
  companyId: number;
  name: string;
  dataTypeIds: number[];
}

export class DataType {
  id: number;
  name: string;
}

export type ProfileState = {
  currentCompanyId: number,
  companies: Dictionary<number, Company>
  services: Dictionary<number, Service>
  purposes: Dictionary<number, Purpose>
  dataTypes: Dictionary<number, DataType>
};

const INITIAL_STATE: ProfileState = {
  currentCompanyId: 1,
  companies: new Dictionary<number, Company>(),
  services: new Dictionary<number, Service>(),
  purposes: new Dictionary<number, Purpose>(),
  dataTypes: new Dictionary<number, DataType>()
};

INITIAL_STATE.companies.setValue(1, {
  id: 1,
  name: "Supercell",
  serviceIds: [1, 2]
});

INITIAL_STATE.services.setValue(1, {
  id: 1,
  companyId: 1,
  name: "Supercell websites or mobile applications/platforms",
  purposeIds: [1,2,3,4,5,6,7,8]
});

INITIAL_STATE.services.setValue(2, {
  id: 2,
  companyId: 1,
  name: "Clash of Clans",
  purposeIds: [5]
});

INITIAL_STATE.purposes.setValue(1, {
  id: 1,
  companyId: 1,
  name: "Create your account",
  dataTypeIds: [1, 5]
});

INITIAL_STATE.purposes.setValue(2, {
  id: 2,
  companyId: 1,
  name: "Provide services to you",
  dataTypeIds: [6,7,8,9]
});

INITIAL_STATE.purposes.setValue(3, {
  id: 3,
  companyId: 1,
  name: "Improve our service",
  dataTypeIds: [2, 3, 4, 5]
});

INITIAL_STATE.purposes.setValue(4, {
  id: 4,
  companyId: 1,
  name: "Contact you",
  dataTypeIds: [6, 11, 12, 13]
});

INITIAL_STATE.purposes.setValue(5, {
  id: 5,
  companyId: 1,
  name: "Conduct research and create reports for internal use",
  dataTypeIds: [1, 2, 3, 4, 5, 8, 9, 13]
});

INITIAL_STATE.purposes.setValue(6, {
  id: 6,
  companyId: 1,
  name: "Monitor, develop and analyze your use of the Service",
  dataTypeIds: [1, 2, 3, 4, 5, 10, 11]
});

INITIAL_STATE.purposes.setValue(7, {
  id: 7,
  companyId: 1,
  name: "User profiling",
  dataTypeIds: [1, 2, 3, 4, 5, 7, 8, 9, 10, 13]
});

INITIAL_STATE.purposes.setValue(8, {
  id: 8,
  companyId: 1,
  name: "Marketing, including targeted advertising",
  dataTypeIds: [1, 3, 4, 5, 6, 7, 8, 9, 10, 12]
});

INITIAL_STATE.dataTypes.setValue(1, {
  id: 1,
  name: "IP address"
});

INITIAL_STATE.dataTypes.setValue(2, {
  id: 2,
  name: "Access times"
});

INITIAL_STATE.dataTypes.setValue(3, {
  id: 3,
  name: "Browser type"
});

INITIAL_STATE.dataTypes.setValue(4, {
  id: 4,
  name: "Browser language"
});

INITIAL_STATE.dataTypes.setValue(5, {
  id: 5,
  name: "Referring web site addresses"
});

INITIAL_STATE.dataTypes.setValue(6, {
  id: 6,
  name: "Your name"
});

INITIAL_STATE.dataTypes.setValue(7, {
  id: 7,
  name: "Profile photo"
});

INITIAL_STATE.dataTypes.setValue(8, {
  id: 8,
  name: "Gender"
});

INITIAL_STATE.dataTypes.setValue(9, {
  id: 9,
  name: "Age or birthday"
});

INITIAL_STATE.dataTypes.setValue(10, {
  id: 10,
  name: "Links to your profiles on social networking websites and third party sites"
});

INITIAL_STATE.dataTypes.setValue(11, {
  id: 11,
  name: "User names"
});

INITIAL_STATE.dataTypes.setValue(12, {
  id: 12,
  name: "E-mail address"
});

INITIAL_STATE.dataTypes.setValue(13, {
  id: 13,
  name: "Mailing address"
});

export const ProfileReducer = reducerWithInitialState(INITIAL_STATE)

;
