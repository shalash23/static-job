import { createContext, useState, useEffect } from "react";
import data from "../../data.json";

export const FilterContext = createContext();
export const JobsContext = createContext();
export const FilteredState = createContext();

const FilterProvider = ({ children }) => {
  const [jobsData, setJobsData] = useState(data);
  const [filteredState, setFilteredState] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setFilters((prevFilters) => new Set(filteredState));
  }, [filteredState]);

  return (
    <FilterContext.Provider value={[filteredState, setFilteredState]}>
      <JobsContext.Provider value={[jobsData, setJobsData]}>
        <FilteredState.Provider value={[filters]}>
          {children}
        </FilteredState.Provider>
      </JobsContext.Provider>
    </FilterContext.Provider>
  );
};

export default FilterProvider;
