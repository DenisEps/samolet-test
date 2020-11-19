import React from "react";

import { LibrariesData } from "../../models/data.interface";

import { ListComponent } from "../../components/libraries-list/libraries-list.component";

interface HomePageProps {
  data: LibrariesData[];
}

export const HomePage: React.FC<HomePageProps> = ({ data }) => {
  return <ListComponent data={data} />;
};
