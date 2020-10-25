import React, { useState, useEffect } from "react";
import { Container, DashWrapper, DashContent } from "./styles";
import axios from "axios";
import { RootStateOrAny, useSelector } from "react-redux";
import { Route } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import DashHeader from "../DashHeader/DashHeader";
import ListItem from "../ListItem/Listitem";
import FullItem from "../FullItem/FullItem";

type searchDataShape = {
  brand: string;
  doors: number;
  fuel: string;
  image: string;
  location: string[];
  model: string;
  price: string;
  years: number;
};

const Dashboard = () => {
  const [searchData, setSearchData] = useState<Array<searchDataShape>>([]);
  const selector = useSelector((state: RootStateOrAny) => state.search);
  useEffect(() => {
    axios
      .get("/searchcars")
      .then((res) => setSearchData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Validator for the filter method
  const validator = (car: searchDataShape): boolean => {
    return (
      // City validator
      selector.cities.some((city: string) => car.location.indexOf(city) >= 0) &&
      // Brand validator
      selector.brands.indexOf(car.brand) >= 0 &&
      // Doors validator
      selector.doors.indexOf(car.doors.toString()) >= 0 &&
      // Fuel validator
      selector.fuel.indexOf(car.fuel) >= 0 &&
      // Years validator
      selector.years[0] <= car.years &&
      car.years <= selector.years[1] &&
      // Price validator
      selector.price[0] <= car.price &&
      car.price <= selector.price[1]
    );
  };

  return (
    <Container>
      <DashHeader />
      <Route path="/rent/item" render={() => <FullItem />} />
      <Route exact path="/rent">
        <DashWrapper>
          <Sidebar />
          <DashContent>
            {searchData
              .filter(validator)
              .map(({ brand, model, price, years, doors, fuel, image }, i) => (
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
              ))}
          </DashContent>
        </DashWrapper>
      </Route>
    </Container>
  );
};

export default Dashboard;
