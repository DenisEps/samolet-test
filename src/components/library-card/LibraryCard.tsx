import React from "react";
import { useHistory } from "react-router-dom";

import { Card } from "antd";

import { LibrariesSpan } from "./LibraryCard.styles";

interface LibraryCardProps {
  region: string;
  numOfLibs: number;
  id: number;
}

export const LibraryCard: React.FC<LibraryCardProps> = ({
  region,
  numOfLibs,
  id,
}) => {
  const history = useHistory();

  const handleOnClick: () => void = () => history.push(`/libraries/${id}`);

  return (
    <Card onClick={handleOnClick} title={region} hoverable>
      Кол-во библиотек: <LibrariesSpan>{numOfLibs}</LibrariesSpan>
    </Card>
  );
};
