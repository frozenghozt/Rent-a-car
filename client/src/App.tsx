import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

import Banner from "./Components/Banner/Banner";
import Categories from "./Components/Categories/Categories";
import Cities from "./Components/Cities/Cities";

import Dashboard from "./Components/Dashboard/Dashboard";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <AppWrapper>
        <Switch>
          <Route exact path="/">
            <Banner />
            <Categories />
            <Cities />
          </Route>
          <Route path="/rent">
            <Dashboard />
          </Route>
        </Switch>
      </AppWrapper>
    </MuiPickersUtilsProvider>
  );
};

export default App;
