export interface Job {
  id: string,
  company: string
  title: string
  link: string
  email: string
  type: string
  deadline: string
  logo: string
  skills: string
}
export interface dataJob {
  id: string,
  title: string,
  company: string,
  link: string,
  skills: string, // not solved
  deadline: string, // solved
  type: string, // issue
  logo: string // not issue
}

export interface type{
  Type:types
}
export enum types{
  INTERNSHIP='Internship',
  ENTRYLEVEL='EntryLevel'
}