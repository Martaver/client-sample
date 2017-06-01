import actionCreatorFactory from "typescript-fsa";
import { RootState } from "../../store/index";

const actionCreator = actionCreatorFactory();

export const HomeActions = {
  setNarf: actionCreator<{someString: string}>("SET_NARF"),
  setFran: actionCreator<{someNumber: number}>("SET_FRAN"),
};
