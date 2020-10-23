import React, { useState, useEffect } from "react";
import { Container, DashWrapper, DashContent } from "./styles";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import axios from "axios";

import Sidebar from "../Sidebar/Sidebar";
import DashHeader from "../DashHeader/DashHeader";
import ListItem from "../ListItem/Listitem";
// import FullItem from "../FullItem/FullItem";

type SearchShape = {
  cities: string[];
  brands: string[];
  price: [string, string];
  date: [Date | MaterialUiPickersDate, Date | MaterialUiPickersDate];
  years: [string, string];
  doors: string[];
  fuel: [string, string];
};

const Dashboard = () => {
  const [searchData, setSearchData] = useState([]);
  const [searchOpt, setSearchOpt] = useState<SearchShape>({
    cities: [],
    brands: [],
    price: ["0", "2000"],
    date: [new Date(), new Date()],
    doors: ["2", "3", "4", "5"],
    years: ["1980", "2020"],
    fuel: ["Gasolina", "Gasoleo"],
  });
  useEffect(() => {
    axios
      .get("/searchcars")
      .then((res) => setSearchData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // // Function to change city
  // const changeCity = (city: string): void => {
  //   let newCities = searchOpt.cities;
  //   newCities.indexOf(city) >= 0
  //     ? newCities.splice(newCities.indexOf(city), 1)
  //     : newCities.push(city);
  //   setSearchOpt({ ...searchOpt, cities: newCities });
  // };

  // // Function to change date departure
  // const changeDeparture = (date: MaterialUiPickersDate): void => {
  //   setSearchOpt({ ...searchOpt, date: [date, searchOpt.date[1]] });
  // };

  // // Function to change date arrival
  // const changeArrival = (date: MaterialUiPickersDate): void => {
  //   setSearchOpt({ ...searchOpt, date: [searchOpt.date[0], date] });
  // };

  // // Function to change brand
  // const changeBrand = (brand: string): void => {
  //   let newBrands = searchOpt.brands;
  //   newBrands.indexOf(brand) >= 0
  //     ? newBrands.splice(newBrands.indexOf(brand), 1)
  //     : newBrands.push(brand);
  //   setSearchOpt({ ...searchOpt, cities: newBrands });
  // };

  // // Function to change fuel
  // const changeFuel = (fuel: string): void => {
  //   let newFuel = searchOpt.fuel;
  //   newFuel.indexOf(fuel) >= 0
  //     ? newFuel.splice(newFuel.indexOf(fuel), 1)
  //     : newFuel.push(fuel);
  //   setSearchOpt({ ...searchOpt, cities: newFuel });
  // };

  // // Function to change doors
  // const changeDoors = (doors: string): void => {
  //   let newDoors = searchOpt.doors;
  //   newDoors.indexOf(doors) >= 0
  //     ? newDoors.splice(newDoors.indexOf(doors), 1)
  //     : newDoors.push(doors);
  //   setSearchOpt({ ...searchOpt, doors: newDoors });
  // };

  // // Function to change years
  // const changeYears = (year: string, index: number): void => {
  //   index === 0
  //     ? setSearchOpt({ ...searchOpt, years: [year, searchOpt.years[1]] })
  //     : setSearchOpt({ ...searchOpt, years: [searchOpt.years[0], year] });
  // };

  // // Function to change price
  // const changePrice = (price: string, index: number): void => {
  //   index === 0
  //     ? setSearchOpt({ ...searchOpt, price: [price, searchOpt.price[1]] })
  //     : setSearchOpt({ ...searchOpt, price: [searchOpt.price[0], price] });
  // };

  return (
    <Container>
      <DashHeader />
      <DashWrapper>
        <Sidebar />
        {/* <FullItem /> */}
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
