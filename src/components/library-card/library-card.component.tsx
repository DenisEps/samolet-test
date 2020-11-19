import React from "react";

import { Card } from "antd";

import { LibrariesSpan } from "./library-card.styles";

interface LibraryCardProps {
  region: string;
  numOfLibs: number;
}

export const LibraryCard: React.FC<LibraryCardProps> = ({
  region,
  numOfLibs,
}) => {
  return (
    <Card title={region} hoverable>
      Кол-во библиотек: <LibrariesSpan>{numOfLibs}</LibrariesSpan>
    </Card>
  );
};
