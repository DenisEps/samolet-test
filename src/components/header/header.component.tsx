import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { LibrariesContext } from "../../providers/libraries/libraries.provider";

import { HeaderContainer, HomeIcon, SearchComp } from "./header.styles";

interface HeaderComponentProps {}

export const HeaderComponent: React.FC<HeaderComponentProps> = ({}) => {
  const history = useHistory();
  const { filterLibraries } = useContext(LibrariesContext);

  const goHome: () => void = () => history.push(`/`);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    filterLibraries(event.target.value);
  };

  return (
    <HeaderContainer>
      <HomeIcon onClick={goHome} />
      <SearchComp
        placeholder="введите регион"
        size="large"
        // onSearch={onSearch}
        onChange={handleChange}
      />
    </HeaderContainer>
  );
};
