import React, { useContext } from "react";
import { List } from "antd";

import LibrariesContext from "../../contexts/libraries/libraries.context";

import { LibraryCard } from "../library-card/library-card.component";

interface ListComponentProps {}

export const ListComponent: React.FC<ListComponentProps> = ({}) => {
  const data = useContext(LibrariesContext);

  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 3,
      }}
      dataSource={data}
      renderItem={(library) => (
        <List.Item>
          <LibraryCard
            region={library.territory}
            numOfLibs={library.libraries}
          />
        </List.Item>
      )}
    />
  );
};
