import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Layout } from "antd";
import "app.css";

import { ContentContainer } from "app.styles";

import { HeaderComponent } from "components/header/Header";
import { HomePage } from "pages/homepage/HomePage";
import { LibraryDetails } from "pages/library-details/LibraryDetails";

const App: React.FC = () => {
  const location = useLocation();
  return (
      <Layout style={{ height: "100vh" }}>
        <HeaderComponent />
        <ContentContainer>
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={{ enter: 300, exit: 300 }}
              classNames={"fade"}
            >
              <Switch location={location}>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route path="/libraries/:id">
                  <LibraryDetails />
                </Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </ContentContainer>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      </Layout>
  );
};

export default App;
