import { HomeAction, HomeActions } from "./Home.actions";

export type HomeState = {
  SomeValue: string,
};

const initial: HomeState = {
  SomeValue: "FRAN",
};

export const HomeReducer = (state: HomeState = initial, action: HomeAction): HomeState => {
  console.log("reducing...", state, action);
  switch (action.type) {
    case HomeActions.setNarf.type: {
      console.log("narfing");
      state.SomeValue = "NARF";
      return state;
    }
    case HomeActions.setFran.type: {
      console.log("franing");
      state.SomeValue = "FRAN";
      return state;
    }
    default: {
      return state;
    }
  }
};
