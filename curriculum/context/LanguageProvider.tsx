'use client'
import React, { useReducer, useContext } from "react";
import {LanguageContext , initialState, reducer} from './language'


const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LanguageContext.Provider value={{ state, dispatch }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;

