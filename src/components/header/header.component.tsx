import React from "react";

import { HeaderContainer, HomeIcon } from "./header.styles";

interface HeaderComponentProps {}

export const HeaderComponent: React.FC<HeaderComponentProps> = ({}) => {
  return (
    <HeaderContainer>
      <HomeIcon />
    </HeaderContainer>
  );
};
