"use client";

import React, { createContext, useState } from "react";
import { IAppContext, IAppState, IAppStateChange } from "../types";
import dataStep from "@/data/steps/navStep.json";

const appState: IAppState = {
  isSticky: false,
  navStep: dataStep[0],
  isMonthly: true,
  formData: {},
};

const AppContext = createContext<IAppContext | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState({ ...appState });
  const updateState = (newState: IAppStateChange) => {
    setState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  return (
    <AppContext.Provider value={{ ...state, updateState: updateState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
