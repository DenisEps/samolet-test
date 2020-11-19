import React from "react";
import { List } from "antd";

import { LibrariesData } from "../../models/data.interface";

import { LibraryCard } from "../library-card/library-card.component";

interface ListComponentProps {
  data: LibrariesData[];
}

export const ListComponent: React.FC<ListComponentProps> = ({ data }) => {
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
