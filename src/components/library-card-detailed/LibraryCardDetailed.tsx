import React, { useContext } from "react";
import { Typography } from "antd";

import {
  LibraryCardDetailedContainer,
  BoldSpan,
} from "./LibraryCardDetailed.styles";
import { useParams } from "react-router-dom";
import { LibrariesContext } from "providers/libraries/libraries.provider";

const { Title } = Typography;

interface LibraryCardDetailedProps {}

export const LibraryCardDetailed: React.FC<LibraryCardDetailedProps> = ({}) => {
  const { id } = useParams<{ id: string | undefined }>();
  const data = useContext(LibrariesContext);

  let libraryInfo;
  if (data) {
    libraryInfo = data.filter((library) => library.order === Number(id))[0];
  }

  return (
    <>
      {libraryInfo ? (
        <LibraryCardDetailedContainer>
          <Title level={3}>{libraryInfo.territory}</Title>
          <p>
            Представительство:<BoldSpan>{libraryInfo.fullname}</BoldSpan>
          </p>
          <p>
            Адрес:<BoldSpan>{libraryInfo.address}</BoldSpan>
          </p>
          <p>
            Кол-во библиотек:<BoldSpan>{libraryInfo.libraries}</BoldSpan>
          </p>
          <p>
            Кол-во компьютеров:<BoldSpan>{libraryInfo.computers}</BoldSpan>
          </p>
        </LibraryCardDetailedContainer>
      ) : (
        <div>Loading....</div>
      )}
    </>
  );
};
