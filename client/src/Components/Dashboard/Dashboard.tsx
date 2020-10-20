import React, { useState, useEffect } from "react";
import { Container, DashWrapper, DashContent } from "./styles";
import axios from "axios";

import Skeleton from "../Skeleton/Skeleton";
import Sidebar from "../Sidebar/Sidebar";
import DashHeader from "../DashHeader/DashHeader";
import ListItem from "../ListItem/Listitem";

const Dashboard = () => {
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    axios
      .get("/searchcars")
      .then((res) => setSearchData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <DashHeader />
      <DashWrapper>
        <Sidebar />
        <DashContent>
          {searchData.map(
            ({ brand, model, price, years, doors, fuel, image }, i) => (
              <ListItem
                key={i}
                brand={brand}
                model={model}
                price={price}
                years={years}
                doors={doors}
                fuel={fuel}
                image={image}
              />
            )
          )}
        </DashContent>
      </DashWrapper>
    </Container>
  );
};

export default Dashboard;
