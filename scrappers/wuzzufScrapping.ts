const Countries = {
  Egypt: 'Egypt',
  UnitedArabEmirates: 'United Arab Emirates',
  SaudiArabia: 'Saudi Arabia',
}
const Cities = {
  Cairo: 'Cairo',
  Alexandria: 'Alexandria',
  Giza: 'Giza',
}
const Areas = {
  NasrCity: 'Nasr City',
  Maadi: 'Maadi',
  Heliopolis: 'Heliopolis',
  NewCairo: 'New Cairo',
  October: '6th of October',
  Dokki: 'Dokki',
  Mohandseen: 'Mohandessin',
  Downtown : 'Downtown',
}
const CareerLevels = {
  Student : 'Student',
  EntryLevel: 'Entry Level',
  Experienced : 'Experienced',
}
const JobTypes = {
  FullTime: 'Full time',
  PartTime: 'Part time',
  Internship: 'Internship',
  FreelanceProject : 'Freelance project',
}

interface IFilters {
  // country be enum of countryFilter and can be array
  country?: string[] | string
  city?: string[] | string
  area?: string[] | string
  career_level?: string
  job_types?: string
  query: string
}



const setFilters = (filters: IFilters) => {

}

setFilters({
  query: 'software engineer',
  country: [Countries.Egypt],
  city: [Cities.Cairo],
  area: [Areas.Maadi],
  career_level: CareerLevels.EntryLevel,
  job_types: JobTypes.FullTime,
})