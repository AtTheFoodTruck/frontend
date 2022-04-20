import React, { createContext, useContext, useState } from "react";

export const ListContext = createContext(null);

export function ListContextProvider({ children }) {
  const [list, setList] = useState([]);

  const value = {
    list,
    setList,
  };

  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
}

export function useListContext() {
  return useContext(ListContext);
}
