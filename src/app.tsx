import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import "./app.css";
import { getData } from "./api";

import { ContentContainer } from "./app.styles";

import { LibrariesData } from "./models/data.interface";

import { HeaderComponent } from "./components/header/header.component";
import { HomePage } from "./pages/homepage/homepage.component";

const App: React.FC = () => {
  const [data, setData] = useState<LibrariesData[]>([]);

  useEffect(() => {
    getData().then(setData);
  }, []);

  return (
    <Layout>
      <HeaderComponent />
      <ContentContainer>
        <HomePage data={data} />
      </ContentContainer>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </Layout>
  );
};

export default App;
