import React from "react";
import Filters from "./Filters/Filters";
import CountriesList from "./CountriesList/CountriesList";
import { FilterProvider } from "../../context/FilterContext";

export default function HomePageList() {
  return (
    <>
      <FilterProvider>
        <Filters />
        <CountriesList />
      </FilterProvider>
    </>
  );
}
