import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout } from "antd";
import "./app.css";
import { getData } from "./api";

import LibrariesContext from "./contexts/libraries/libraries.context";

import { ContentContainer } from "./app.styles";
import { LibrariesData } from "./models/data.interface";

import { HeaderComponent } from "./components/header/header.component";
import { HomePage } from "./pages/homepage/homepage.component";
import {LibraryDetails} from './pages/library-details/library-details.component';

const App: React.FC = () => {
  const [data, setData] = useState<LibrariesData[]>([]);

  useEffect(() => {
    getData().then(setData);
  }, []);

  return (
    <LibrariesContext.Provider value={data}>
      <Layout>
        <HeaderComponent />

        <ContentContainer>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/libraries/:id">
              <LibraryDetails />
            </Route>
          </Switch>
        </ContentContainer>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      </Layout>
    </LibrariesContext.Provider>
  );
};

export default App;
