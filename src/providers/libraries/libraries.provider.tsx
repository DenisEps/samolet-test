import React, { createContext, useState, useEffect } from "react";

import { LibrariesData } from "models/data.interface";
import { getData } from "../../api";

interface LibrariesContextInterface {
  modifiedData: LibrariesData[];
  filterLibraries: any;
}

export const LibrariesContext = createContext<LibrariesContextInterface>({
  modifiedData: [],
  filterLibraries: () => {},
});

export const LibrariesProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<LibrariesData[]>([]);
  const [modifiedData, setModifiedData] = useState<LibrariesData[]>(data);

  useEffect(() => {
    getData().then((res) => {
      setData(res);
      setModifiedData(res);
    });
  }, []);

  const filterLibraries = (str: string) => {
    const newData = data?.filter((library) =>
      library.territory.toString().toLowerCase().includes(str.toLowerCase())
    );
    setModifiedData(newData);
  };

  return (
    <LibrariesContext.Provider value={{ modifiedData, filterLibraries }}>
      {children}
    </LibrariesContext.Provider>
  );
};
