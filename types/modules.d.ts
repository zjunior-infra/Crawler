export interface Job {
  id: string,
  title: string,
  company: string,
  link: string,
  skills: string,
  type: string,
  logo: string,
  description:string
}
export interface dataJob {
  id: string,
  title: string,
  company: string,
  link: string,
  skills: string,
  type: string,
  logo: string,
  description:string
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
