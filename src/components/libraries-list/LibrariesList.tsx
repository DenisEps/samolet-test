import React, { useContext, useMemo } from "react";
import { List } from "antd";

import { LibrariesContext } from "providers/libraries/libraries.provider";
import { SortFilterContext } from "providers/sortfilter/sortfilter.provider";

import { LibrariesData } from "models/data.interface";

import { LibraryCard } from "../library-card/LibraryCard";

interface ListComponentProps {}

export const ListComponent: React.FC<ListComponentProps> = ({}) => {
  const data = useContext(LibrariesContext);
  const { filter, sort } = useContext(SortFilterContext);

  const displayData = useMemo<LibrariesData[] | null>(() => {
    if (data === null || data.length === 0) {
      return [];
    }

    let newData = [...data];

    if (sort !== null) {
      if (sort === "asc") {
        newData.sort((a, b) => {
          return a.libraries - b.libraries;
        });
      }
      if (sort === "desc") {
        newData.sort((a, b) => {
          return b.libraries - a.libraries;
        });
      }
    }

    if (filter !== "") {
      newData = data?.filter((library) =>
        library.territory
          .toString()
          .toLowerCase()
          .includes(filter.toString().toLowerCase())
      );
    }

    return newData;
  }, [data, filter, sort]);

  if (displayData === null) {
    return <>Loading</>;
  }

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
      dataSource={displayData}
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
