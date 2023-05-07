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
type IFilter = {
  careerLevel:string[],
  jobType:string[],
  industry:string[],
  experienceMin:string,
  experienceMax:string
}

type IQuery = {
  url?:URL,
  filters?:IFilter,
  search:string
}

type IUuid = {
  value:string,
  uuid:string
}
