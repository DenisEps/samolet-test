import React, { createContext, useState, useEffect } from "react";

import { LibrariesData } from "models/data.interface";
import { getData } from "../../api";

export const LibrariesContext = createContext<LibrariesData[]>([]);

export const LibrariesProvider: React.FC = ({
  children,
}) => {
  const [data, setData] = useState<LibrariesData[]>([]);

  useEffect(() => {
    getData().then(setData);
  }, []);

return (<LibrariesContext.Provider value={data}>{children}</LibrariesContext.Provider>);
};
