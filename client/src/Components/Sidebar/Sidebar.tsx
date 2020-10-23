import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import {
  changeCity,
  changeBrand,
  changePrice,
  changeDeparture,
  changeArrival,
  changeYears,
  changeDoors,
  changeFuel,
} from "../../redux/actions/searchAction";
import {
  Container,
  City,
  Days,
  Brand,
  Year,
  Doors,
  Fuel,
  Price,
} from "./styles";
import "./styles.css";

const style = {
  border: 0,
  fontSize: "14px",
};

const Sidebar = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state: RootStateOrAny) => state.search);
  return (
    <Container>
      <City>
        <h3>City</h3>
        <div>
          <button
            onClick={() => dispatch(changeCity("Lisboa"))}
            style={{
              border:
                selector.cities.indexOf("Lisboa") >= 0
                  ? `1px solid #2f45bf`
                  : `1px solid #bfbfbf`,
            }}
          >
            Lisboa
          </button>
          <button
            onClick={() => dispatch(changeCity("Porto"))}
            style={{
              border:
                selector.cities.indexOf("Porto") >= 0
                  ? `1px solid #2f45bf`
                  : `1px solid #bfbfbf`,
            }}
          >
            Porto
          </button>
          <button
            onClick={() => dispatch(changeCity("Algarve"))}
            style={{
              border:
                selector.cities.indexOf("Algarve") >= 0
                  ? `1px solid #2f45bf`
                  : `1px solid #bfbfbf`,
            }}
          >
            Algarve
          </button>
          <button
            onClick={() => dispatch(changeCity("Coimbra"))}
            style={{
              border:
                selector.cities.indexOf("Coimbra") >= 0
                  ? `1px solid #2f45bf`
                  : `1px solid #bfbfbf`,
            }}
          >
            Coimbra
          </button>
          <button
            onClick={() => dispatch(changeCity("Braga"))}
            style={{
              border:
                selector.cities.indexOf("Braga") >= 0
                  ? `1px solid #2f45bf`
                  : `1px solid #bfbfbf`,
            }}
          >
            Braga
          </button>
          <button
            onClick={() => dispatch(changeCity("Bragança"))}
            style={{
              border:
                selector.cities.indexOf("Bragança") >= 0
                  ? `1px solid #2f45bf`
                  : `1px solid #bfbfbf`,
            }}
          >
            Bragança
          </button>
          <button
            onClick={() => dispatch(changeCity("Setúbal"))}
            style={{
              border:
                selector.cities.indexOf("Setúbal") >= 0
                  ? `1px solid #2f45bf`
                  : `1px solid #bfbfbf`,
            }}
          >
            Setúbal
          </button>
        </div>
      </City>
      <Days>
        <h3>Date</h3>
        <div>
          <DatePicker
            style={style}
            value={selector.date[0]}
            onChange={(date: MaterialUiPickersDate) =>
              dispatch(changeDeparture(date))
            }
            animateYearScrolling
          />
          <DatePicker
            style={style}
            value={selector.date[1]}
            onChange={(date: MaterialUiPickersDate) =>
              dispatch(changeArrival(date))
            }
            animateYearScrolling
          />
        </div>
      </Days>
      <Brand>
        <h3>Brand</h3>
        <div>
          <button
            onClick={() => dispatch(changeBrand("BMW"))}
            style={{
              border:
                selector.brands.indexOf("BMW") >= 0
                  ? `1px solid #2f45bf`
                  : `1px solid #bfbfbf`,
            }}
          >
            BMW
          </button>
          <button
            onClick={() => dispatch(changeBrand("Mercedes"))}
            style={{
              border:
                selector.brands.indexOf("Mercedes") >= 0
                  ? `1px solid #2f45bf`
                  : `1px solid #bfbfbf`,
            }}
          >
            Mercedes
          </button>
          <button
            onClick={() => dispatch(changeBrand("Toyota"))}
            style={{
              border:
                selector.brands.indexOf("Toyota") >= 0
                  ? `1px solid #2f45bf`
                  : `1px solid #bfbfbf`,
            }}
          >
            Toyota
          </button>
          <button
            onClick={() => dispatch(changeBrand("Renault"))}
            style={{
              border:
                selector.brands.indexOf("Renault") >= 0
                  ? `1px solid #2f45bf`
                  : `1px solid #bfbfbf`,
            }}
          >
            Renault
          </button>
          <button
            onClick={() => dispatch(changeBrand("Lamborghini"))}
            style={{
              border:
                selector.brands.indexOf("Lamborghini") >= 0
                  ? `1px solid #2f45bf`
                  : `1px solid #bfbfbf`,
            }}
          >
            Lamborghini
          </button>
          <button
            onClick={() => dispatch(changeBrand("Porsche"))}
            style={{
              border:
                selector.brands.indexOf("Porsche") >= 0
                  ? `1px solid #2f45bf`
                  : `1px solid #bfbfbf`,
            }}
          >
            Porsche
          </button>
          <button
            onClick={() => dispatch(changeBrand("Audi"))}
            style={{
              border:
                selector.brands.indexOf("Audi") >= 0
                  ? `1px solid #2f45bf`
                  : `1px solid #bfbfbf`,
            }}
          >
            Audi
          </button>
          <button
            onClick={() => dispatch(changeBrand("Jaguar"))}
            style={{
              border:
                selector.brands.indexOf("Jaguar") >= 0
                  ? `1px solid #2f45bf`
                  : `1px solid #bfbfbf`,
            }}
          >
            Jaguar
          </button>
        </div>
      </Brand>
      <Year>
        <h3>Years</h3>
        <div>
          <input
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch(changeYears({ years: e.target.value, index: 0 }))
            }
            value={selector.years[0]}
          />
          -
          <input
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch(changeYears({ years: e.target.value, index: 1 }))
            }
            value={selector.years[1]}
          />
        </div>
      </Year>
      <Doors>
        <h3>Doors</h3>
        <div>
          <button
            onClick={() => dispatch(changeDoors("2"))}
            style={{
              border:
                selector.doors.indexOf("2") >= 0
                  ? `1px solid #2f45bf`
                  : `1px solid #bfbfbf`,
            }}
          >
            2
          </button>
          <button
            onClick={() => dispatch(changeDoors("3"))}
            style={{
              border:
                selector.doors.indexOf("3") >= 0
                  ? `1px solid #2f45bf`
                  : `1px solid #bfbfbf`,
            }}
          >
            3
          </button>
          <button
            onClick={() => dispatch(changeDoors("4"))}
            style={{
              border:
                selector.doors.indexOf("4") >= 0
                  ? `1px solid #2f45bf`
                  : `1px solid #bfbfbf`,
            }}
          >
            4
          </button>
          <button
            onClick={() => dispatch(changeDoors("5"))}
            style={{
              border:
                selector.doors.indexOf("5") >= 0
                  ? `1px solid #2f45bf`
                  : `1px solid #bfbfbf`,
            }}
          >
            5
          </button>
        </div>
      </Doors>
      <Fuel>
        <h3>Fuel</h3>
        <div>
          <button
            onClick={() => dispatch(changeFuel("Gasolina"))}
            style={{
              border:
                selector.fuel.indexOf("Gasolina") >= 0
                  ? `1px solid #2f45bf`
                  : `1px solid #bfbfbf`,
            }}
          >
            Gasolina
          </button>
          <button
            onClick={() => dispatch(changeFuel("Gasoleo"))}
            style={{
              border:
                selector.fuel.indexOf("Gasoleo") >= 0
                  ? `1px solid #2f45bf`
                  : `1px solid #bfbfbf`,
            }}
          >
            Gasoleo
          </button>
        </div>
      </Fuel>
      <Price>
        <h3>Price</h3>
        <div>
          <input
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch(changePrice({ price: e.target.value, index: 0 }))
            }
            value={selector.price[0]}
          />
          -
          <input
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch(changePrice({ price: e.target.value, index: 1 }))
            }
            value={selector.price[1]}
          />
        </div>
      </Price>
    </Container>
  );
};

export default Sidebar;
