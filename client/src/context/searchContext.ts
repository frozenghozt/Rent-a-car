import { createContext } from "react";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

type SearchShape = {
  cities: string[];
  brands: string[];
  price: [string, string];
  date: [Date | MaterialUiPickersDate, Date | MaterialUiPickersDate];
  years: [string, string];
  doors: string[];
  fuel: [string, string];
};

export default createContext<SearchShape | null>(null);
