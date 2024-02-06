import { AreasFilter, CareerLevelsFilter, CitiesFilter, CountriesFilter, JobTypesFilter } from "./utils/filters"
import { validateQuery } from "./utils/validate-query"


validateQuery({
  query: 'software engineer',
  options: {
    country: [CountriesFilter.Egypt],
    city: [CitiesFilter.Cairo],
    area: [AreasFilter.Maadi],
    career_level: CareerLevelsFilter.EntryLevel,
    job_types: JobTypesFilter.FullTime,
  }
})