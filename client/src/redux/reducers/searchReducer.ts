import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

type stateShape = {
  cities: string[];
  brands: string[];
  price: [number, number];
  date: [Date | MaterialUiPickersDate, Date | MaterialUiPickersDate];
  doors: string[];
  years: [string, string];
  fuel: [string, string];
};

const initialState: stateShape = {
  cities: [
    "Lisboa",
    "Porto",
    "Algarve",
    "Coimbra",
    "Braga",
    "Bragança",
    "Setúbal",
  ],
  brands: [
    "BMW",
    "Mercedes",
    "Toyota",
    "Renault",
    "Lamborghini",
    "Porsche",
    "Audi",
    "Jaguar",
    "Ford",
  ],
  price: [0, 2000],
  date: [new Date(), new Date()],
  doors: ["2", "3", "4", "5"],
  years: ["1980", "2020"],
  fuel: ["Gasolina", "Gasoleo"],
};

export const search = (state = initialState, action: any) => {
  switch (action.type) {
    case "CHANGE_CITY":
      return {
        ...state,
        cities:
          state.cities.indexOf(action.payload) >= 0
            ? state.cities.filter((each) => each !== action.payload)
            : [...state.cities, action.payload],
      };
    case "CHANGE_CITY_HOME":
      return {
        ...state,
        cities: [...action.payload],
      };
    case "CHANGE_BRAND":
      return {
        ...state,
        brands:
          state.brands.indexOf(action.payload) >= 0
            ? state.brands.filter((each) => each !== action.payload)
            : [...state.brands, action.payload],
      };
    case "CHANGE_BRAND_HOME":
      return {
        ...state,
        brands: [...action.payload],
      };
    case "CHANGE_PRICE":
      return {
        ...state,
        price:
          action.payload.index === 0
            ? [action.payload.price, state.price[1]]
            : [state.price[0], action.payload.price],
      };
    case "CHANGE_DEPARTURE":
      return {
        ...state,
        date: [action.payload, state.date[1]],
      };
    case "CHANGE_ARRIVAL":
      return {
        ...state,
        date: [state.date[0], action.payload],
      };
    case "CHANGE_YEARS":
      return {
        ...state,
        years:
          action.payload.index === 0
            ? [action.payload.years, state.years[1]]
            : [state.years[0], action.payload.years],
      };
    case "CHANGE_DOORS":
      return {
        ...state,
        doors:
          state.doors.indexOf(action.payload) >= 0
            ? state.doors.filter((each) => each !== action.payload)
            : [...state.doors, action.payload],
      };
    case "CHANGE_FUEL":
      return {
        ...state,
        fuel:
          state.fuel.indexOf(action.payload) >= 0
            ? state.fuel.filter((each) => each !== action.payload)
            : [...state.fuel, action.payload],
      };
    default:
      return state;
  }
};
