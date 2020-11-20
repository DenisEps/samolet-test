import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import "app.css";

import { ContentContainer } from "app.styles";

import { HeaderComponent } from "components/header/Header";
import { HomePage } from "pages/homepage/HomePage";
import {LibraryDetails} from 'pages/library-details/LibraryDetails';

const App: React.FC = () => {

  return (
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
  );
};

export default App;
