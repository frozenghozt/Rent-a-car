import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

export const changeCity = (payload: string) => ({
  type: "CHANGE_CITY",
  payload,
});

export const changeCityHome = (payload: string[]) => ({
  type: "CHANGE_CITY_HOME",
  payload,
});

export const changeBrand = (payload: string) => ({
  type: "CHANGE_BRAND",
  payload,
});

export const changeBrandHome = (payload: string[]) => ({
  type: "CHANGE_BRAND_HOME",
  payload,
});

export const changePrice = (payload: { price: number; index: number }) => ({
  type: "CHANGE_PRICE",
  payload,
});

export const changeDeparture = (payload: MaterialUiPickersDate) => ({
  type: "CHANGE_DEPARTURE",
  payload,
});

export const changeArrival = (payload: MaterialUiPickersDate) => ({
  type: "CHANGE_ARRIVAL",
  payload,
});

export const changeYears = (payload: { years: number; index: number }) => ({
  type: "CHANGE_YEARS",
  payload,
});

export const changeDoors = (payload: string) => ({
  type: "CHANGE_DOORS",
  payload,
});

export const changeFuel = (payload: string) => ({
  type: "CHANGE_FUEL",
  payload,
});
