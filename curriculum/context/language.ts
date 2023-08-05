import { createContext } from "react";

type initialStateType = string;

export const initialState: initialStateType = "BR";

export const LanguageContext = createContext<{
  state: initialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "CHANGE_LANG":
        return "EN";
      case "RESET":
        return initialState;
  
      default:
        return state;
    }
  };