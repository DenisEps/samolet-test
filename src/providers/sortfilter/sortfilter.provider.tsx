import React, { createContext, useState, useEffect } from "react";

const noop = () => undefined;

type Sort = null | "desc" | "asc";
type Filter = string;

interface SortFilterContextInterface {
  filter: Filter;
  sort: Sort;
  setSort: React.Dispatch<React.SetStateAction<Sort>>;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}

export const SortFilterContext = createContext<SortFilterContextInterface>({
  sort: null,
  filter: "",
  setSort: noop,
  setFilter: noop,
});

export const SortFilterProvider: React.FC = ({ children }) => {
  const [filter, setFilter] = useState<Filter>("");
  const [sort, setSort] = useState<Sort>(null);

  return (
    <SortFilterContext.Provider value={{ filter, sort, setFilter, setSort }}>
      {children}
    </SortFilterContext.Provider>
  );
};
