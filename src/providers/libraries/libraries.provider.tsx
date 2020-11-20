import React, { createContext, useState, useEffect } from "react";

import { LibrariesData } from "models/data.interface";
import { getData } from "api";

type LibrariesContextValue = LibrariesData[] | null;

export const LibrariesContext = createContext<LibrariesContextValue>(null);

export const LibrariesProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<LibrariesContextValue>(null);

  useEffect(() => {
    getData().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <LibrariesContext.Provider value={data}>
      {children}
    </LibrariesContext.Provider>
  );
};
