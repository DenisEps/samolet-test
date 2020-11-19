import React, { createContext, useState, useEffect } from "react";

import { LibrariesData } from "models/data.interface";
import { getData } from "../../api";

export const LibrariesContext = createContext<LibrariesData[] | undefined>(undefined);

export const LibrariesProvider: React.FC = ({
  children,
}) => {
  const [data, setData] = useState<LibrariesData[] | undefined>(undefined);


  useEffect(() => {
    getData().then(setData);
    console.log('fetching data');

  }, []);

return (<LibrariesContext.Provider value={data}>{children}</LibrariesContext.Provider>);
};
