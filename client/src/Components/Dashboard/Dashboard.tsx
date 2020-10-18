import React from "react";
import { Container, DashWrapper, DashContent } from "./styles";

import Sidebar from "../Sidebar/Sidebar";
import DashHeader from "../DashHeader/DashHeader";
import ListItem from "../ListItem/Listitem";

const Dashboard = () => {
  return (
    <Container>
      <DashHeader />
      <DashWrapper>
        <Sidebar />
        <DashContent>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </DashContent>
      </DashWrapper>
    </Container>
  );
};

export default Dashboard;
