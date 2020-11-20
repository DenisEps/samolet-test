import React, { useContext } from "react";
import { Typography } from "antd";

import {
  LibraryCardDetailedContainer,
  BoldSpan,
} from "./library-card-detailed.styles";
import { useParams } from "react-router-dom";
import { LibrariesContext } from "../../providers/libraries/libraries.provider";

const { Title } = Typography;

interface LibraryCardDetailedProps {}

export const LibraryCardDetailed: React.FC<LibraryCardDetailedProps> = ({}) => {
  const { id } = useParams<{ id: string | undefined }>();
  const { modifiedData } = useContext(LibrariesContext);

  let libraryInfo;
  if (modifiedData) {
    libraryInfo = modifiedData.filter(
      (library) => library.order === Number(id)
    )[0];
  }

  return (
    <>
      {libraryInfo ? (
        <LibraryCardDetailedContainer>
          <Title level={3}>{libraryInfo.territory}</Title>
          <p>
            Кол-во библиотек:<BoldSpan>{libraryInfo.libraries}</BoldSpan>
          </p>
          <p>
            Представительство:<BoldSpan>{libraryInfo.fullname}</BoldSpan>
          </p>
        </LibraryCardDetailedContainer>
      ) : <div>Loading....</div>}
    </>
  );
};
