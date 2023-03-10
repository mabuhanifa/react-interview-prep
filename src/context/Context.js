import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  value: 0,
};

const reducer = (state, action) => {};

const Provider = createContext();

export default function Context({ children }) {
  const value = useReducer(reducer, initialState);

  return (
    <Provider.Provider value={value}>
      {children}
    </Provider.Provider>
  );
}

export const useSelect = () => {
  return useContext(Provider);
};
