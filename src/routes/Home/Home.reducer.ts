import { HomeAction, HomeActions } from "./Home.actions";

export type HomeState = {
  SomeValue: string,
};

const initial: HomeState = {
  SomeValue: "FRAN",
};

export const HomeReducer = (state: HomeState = initial, action: HomeAction): HomeState => {
  switch (action.type) {
    case HomeActions.setNarf.type: {
      return {
        SomeValue: "NARF",
      };
    }
    case HomeActions.setFran.type: {
      return {
        SomeValue: "FRANT",
      };
    }
    default: {
      return state;
    }
  }
};
