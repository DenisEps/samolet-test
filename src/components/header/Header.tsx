import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import {
  HeaderContainer,
  HomeIcon,
  SearchComp,
  SortIcon,
  SortFilterContainer,
} from "./Header.styles";

import { SortFilterContext } from "providers/sortfilter/sortfilter.provider";

interface HeaderComponentProps {}

export const HeaderComponent: React.FC<HeaderComponentProps> = ({}) => {
  const history = useHistory();
  const { sort, setSort, setFilter, filter } = useContext(SortFilterContext);

  const goHome = () => history.push("/");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.currentTarget.value);
  };

  const handleOnSort = () => {
    switch (sort) {
      case "desc":
        setSort("asc");
        break;
      case "asc":
        setSort(null);
        break;
      case null:
        setSort("desc");
        break;
      default:
        setSort(null);
        break;
    }
  };

  const onSearch = () => {
    history.push("/");
  };

  return (
    <HeaderContainer>
      <HomeIcon onClick={goHome} />
      <SortFilterContainer style={{ display: "flex", alignItems: "center" }}>
        <SearchComp
          placeholder="введите регион"
          size="large"
          value={filter}
          onChange={handleChange}
          onSearch={onSearch}
        />
        <SortIcon
          className={`${sort === "asc" ? "rotate" : ""}`}
          onClick={handleOnSort}
          sort={sort}
        />
      </SortFilterContainer>
    </HeaderContainer>
  );
};
