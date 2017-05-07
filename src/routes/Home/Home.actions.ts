import { createActionCreator } from "react-redux-typescript";

export const HomeActions = {
  setNarf: createActionCreator("SET_NARF"),
  setFran: createActionCreator("SET_FRAN"),
};

export type HomeAction = typeof HomeActions[keyof typeof HomeActions];
