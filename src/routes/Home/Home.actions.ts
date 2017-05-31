import { actionCreator } from "../../tools/react-redux-typescript";
import { RootState } from "../../store/index";

export const HomeActions = {
  setNarf: actionCreator("SET_NARF"),
  setFran: actionCreator("SET_FRAN"),
};

export type HomeAction = typeof HomeActions[keyof typeof HomeActions];
