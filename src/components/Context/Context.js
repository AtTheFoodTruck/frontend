import React, { createContext, useContext, useState } from "react";

export const Context = createContext(null);

export function ContextProvider({ children }) {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  const value = {
    list,
    setList,
    search,
    setSearch,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useCustomContext() {
  return useContext(Context);
}
