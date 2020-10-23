import React, { useState, useRef } from "react";
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

type SearchShape = {
  location: string;
  arrival: Date | MaterialUiPickersDate;
  departure: Date | MaterialUiPickersDate;
  vehicle: string;
};

const Search = () => {
  const [locationIsOpen, setLocationIsOpen] = useState<boolean>(false);
  const [vehicleIsOpen, setVehicleIsOpen] = useState<boolean>(false);
  const [searchData, setSearchData] = useState<SearchShape>({
    location: "Lisboa",
    arrival: new Date(),
    departure: new Date(),
    vehicle: "Any",
  });

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
          <span>{searchData.location}</span>
          {locationIsOpen && (
            <Options ref={optionsdiv}>
              <ul>
                <li
                  onClick={() =>
                    setSearchData({ ...searchData, location: "Lisboa" })
                  }
                >
                  Lisboa
                </li>
                <li
                  onClick={() =>
                    setSearchData({ ...searchData, location: "Porto" })
                  }
                >
                  Porto
                </li>
                <li
                  onClick={() =>
                    setSearchData({ ...searchData, location: "Algarve" })
                  }
                >
                  Algarve
                </li>
                <li
                  onClick={() =>
                    setSearchData({ ...searchData, location: "Coimbra" })
                  }
                >
                  Coimbra
                </li>
                <li
                  onClick={() =>
                    setSearchData({ ...searchData, location: "Braga" })
                  }
                >
                  Braga
                </li>
                <li
                  onClick={() =>
                    setSearchData({ ...searchData, location: "Bragança" })
                  }
                >
                  Bragança
                </li>
                <li
                  onClick={() =>
                    setSearchData({ ...searchData, location: "Setúbal" })
                  }
                >
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
            <span>ARRIVAL</span>
            <DatePicker
              style={style}
              value={searchData.arrival}
              onChange={(date: MaterialUiPickersDate) =>
                setSearchData({ ...searchData, arrival: date })
              }
              animateYearScrolling
            />
          </div>
          <div>
            <span>DEPARTURE</span>
            <DatePicker
              style={style}
              value={searchData.departure}
              onChange={(date: MaterialUiPickersDate) =>
                setSearchData({ ...searchData, departure: date })
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
          <span>{searchData.vehicle}</span>
          {vehicleIsOpen && (
            <Options ref={optionsdiv}>
              <ul>
                <li
                  onClick={() =>
                    setSearchData({ ...searchData, vehicle: "Any" })
                  }
                >
                  Any
                </li>
                <li
                  onClick={() =>
                    setSearchData({ ...searchData, vehicle: "BMW" })
                  }
                >
                  BMW
                </li>
                <li
                  onClick={() =>
                    setSearchData({ ...searchData, vehicle: "Mercedes" })
                  }
                >
                  Mercedes
                </li>
                <li
                  onClick={() =>
                    setSearchData({ ...searchData, vehicle: "Toyota" })
                  }
                >
                  Toyota
                </li>
                <li
                  onClick={() =>
                    setSearchData({ ...searchData, vehicle: "Renaut" })
                  }
                >
                  Renaut
                </li>
                <li
                  onClick={() =>
                    setSearchData({ ...searchData, vehicle: "Lamborghini" })
                  }
                >
                  Lamborghini
                </li>
                <li
                  onClick={() =>
                    setSearchData({ ...searchData, vehicle: "Porsche" })
                  }
                >
                  Porsche
                </li>
                <li
                  onClick={() =>
                    setSearchData({ ...searchData, vehicle: "Audi" })
                  }
                >
                  Audi
                </li>
                <li
                  onClick={() =>
                    setSearchData({ ...searchData, vehicle: "Jaguar" })
                  }
                >
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
