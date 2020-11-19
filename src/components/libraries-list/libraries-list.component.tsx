import React, { useContext } from "react";
import { List } from "antd";

import { LibrariesContext } from "../../providers/libraries/libraries.provider";

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
        md: 3,
        lg: 4,
        xl: 4,
        xxl: 3,
      }}
      dataSource={data}
      renderItem={(library) => (
        <List.Item>
          <LibraryCard
            region={library.territory}
            numOfLibs={library.libraries}
            id={library.order}
          />
        </List.Item>
      )}
    />
  );
};
