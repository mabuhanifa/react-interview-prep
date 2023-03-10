import React, { createContext, useContext, useReducer } from "react";

const initialState = {};

const reducer = (state, action) => {};

const Provider = createContext();

export default function Context({ children }) {
  const value = useReducer(initialState, reducer);

  return <Provider.Provider value={value}>{children}</Provider.Provider>;
}

export const useSelect = () => {
  return useContext(Provider);
};
