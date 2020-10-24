import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Where,
  Options,
  DateCont,
  Vehicle,
  SearchButton,
  Vertical,
  StyledLink,
} from "./styles";
import "./styles.css";
import {
  changeCityHome,
  changeBrandHome,
  changeDeparture,
  changeArrival,
} from "../../redux/actions/searchAction";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { DatePicker } from "@material-ui/pickers";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import DriveEtaOutlinedIcon from "@material-ui/icons/DriveEtaOutlined";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

const style = {
  border: 0,
};

const Search = () => {
  const [locationIsOpen, setLocationIsOpen] = useState<boolean>(false);
  const [vehicleIsOpen, setVehicleIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const selector = useSelector((state: RootStateOrAny) => state.search);

  useEffect(() => {
    dispatch(
      changeCityHome([
        "Lisboa",
        "Porto",
        "Algarve",
        "Coimbra",
        "Braga",
        "Bragança",
        "Setúbal",
      ])
    );
    dispatch(
      changeBrandHome([
        "BMW",
        "Mercedes",
        "Toyota",
        "Renault",
        "Lamborghini",
        "Porsche",
        "Audi",
        "Jaguar",
        "Ford",
      ])
    );
  }, [dispatch]);

  // Ref + clickoutside custom hook
  const optionsdiv = useRef(null);
  useOnClickOutside(optionsdiv, () => {
    setLocationIsOpen(false);
    setVehicleIsOpen(false);
  });

  return (
    <Container>
      <Where>
        <RoomOutlinedIcon style={{ color: "#999" }} />
        <div onClick={() => setLocationIsOpen(!locationIsOpen)}>
          <span>WHERE</span>
          <span>{selector.cities.length === 7 ? "Any" : selector.cities}</span>
          {locationIsOpen && (
            <Options ref={optionsdiv}>
              <ul>
                <li
                  onClick={() =>
                    dispatch(
                      changeCityHome([
                        "Lisboa",
                        "Porto",
                        "Algarve",
                        "Coimbra",
                        "Braga",
                        "Bragança",
                        "Setúbal",
                      ])
                    )
                  }
                >
                  Any
                </li>
                <li onClick={() => dispatch(changeCityHome(["Lisboa"]))}>
                  Lisboa
                </li>
                <li onClick={() => dispatch(changeCityHome(["Porto"]))}>
                  Porto
                </li>
                <li onClick={() => dispatch(changeCityHome(["Algarve"]))}>
                  Algarve
                </li>
                <li onClick={() => dispatch(changeCityHome(["Coimbra"]))}>
                  Coimbra
                </li>
                <li onClick={() => dispatch(changeCityHome(["Braga"]))}>
                  Braga
                </li>
                <li onClick={() => dispatch(changeCityHome(["Bragança"]))}>
                  Bragança
                </li>
                <li onClick={() => dispatch(changeCityHome(["Setúbal"]))}>
                  Setúbal
                </li>
              </ul>
            </Options>
          )}
        </div>
        <Vertical />
      </Where>
      <DateCont>
        <CalendarTodayOutlinedIcon style={{ color: "#999" }} fontSize="small" />
        <div>
          <div>
            <span>DEPARTURE</span>
            <DatePicker
              style={style}
              value={selector.departure}
              onChange={(date: MaterialUiPickersDate) =>
                dispatch(changeDeparture(date))
              }
              animateYearScrolling
            />
          </div>
          <div>
            <span>ARRIVAL</span>
            <DatePicker
              style={style}
              value={selector.arrival}
              onChange={(date: MaterialUiPickersDate) =>
                dispatch(changeArrival(date))
              }
              animateYearScrolling
            />
          </div>
        </div>
      </DateCont>
      <Vehicle>
        <DriveEtaOutlinedIcon style={{ color: "#999" }} />
        <div onClick={() => setVehicleIsOpen(!vehicleIsOpen)}>
          <span>VEHICLE</span>
          <span>{selector.brands.length === 9 ? "Any" : selector.brands}</span>
          {vehicleIsOpen && (
            <Options ref={optionsdiv}>
              <ul>
                <li
                  onClick={() =>
                    dispatch(
                      changeBrandHome([
                        "BMW",
                        "Mercedes",
                        "Toyota",
                        "Renault",
                        "Lamborghini",
                        "Porsche",
                        "Audi",
                        "Jaguar",
                        "Ford",
                      ])
                    )
                  }
                >
                  Any
                </li>
                <li onClick={() => dispatch(changeBrandHome(["BMW"]))}>BMW</li>
                <li onClick={() => dispatch(changeBrandHome(["Mercedes"]))}>
                  Mercedes
                </li>
                <li onClick={() => dispatch(changeBrandHome(["Toyota"]))}>
                  Toyota
                </li>
                <li onClick={() => dispatch(changeBrandHome(["Renault"]))}>
                  Renault
                </li>
                <li onClick={() => dispatch(changeBrandHome(["Lamborghini"]))}>
                  Lamborghini
                </li>
                <li onClick={() => dispatch(changeBrandHome(["Porsche"]))}>
                  Porsche
                </li>
                <li onClick={() => dispatch(changeBrandHome(["Audi"]))}>
                  Audi
                </li>
                <li onClick={() => dispatch(changeBrandHome(["Jaguar"]))}>
                  Jaguar
                </li>
                <li onClick={() => dispatch(changeBrandHome(["Ford"]))}>
                  Jaguar
                </li>
              </ul>
            </Options>
          )}
        </div>
      </Vehicle>
      <StyledLink to="/dashboard">
        <SearchButton>
          <SearchRoundedIcon />
        </SearchButton>
      </StyledLink>
    </Container>
  );
};

export default Search;
