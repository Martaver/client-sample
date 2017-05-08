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
      return {
        SomeValue: "NARF",
      };
    }
    case HomeActions.setFran.type: {
      console.log("franing");
      return {
        SomeValue: "FRANTIC",
      };
    }
    default: {
      return state;
    }
  }
};
