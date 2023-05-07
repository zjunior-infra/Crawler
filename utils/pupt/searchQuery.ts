import { IFilter, IQuery } from "../../types/modules"

const url = new URL('https://wuzzuf.net/search/jobs/?a=hpb')

export const filters:IFilter = {
    careerLevel: ['Entry Level','Student'],
    jobType: ['full_time','internship'],
    industry: ['Engineering - Telecom/Technology','IT/Software Development'],
    experienceMin: '0',
    experienceMax: '3'
}

/*
    Search parms keys 
    filters[career_level][0]
    filters[career_level][1]
    filters[job_types][0]
    filters[job_types][1]
    filters[roles][0]
    filters[roles][1]
    filters[years_of_experience_min]
    filters[years_of_experience_max]
    q

*/

function generateUrl(baseUrl:URL = url ,filter = filters,search:string){    
    const searchParams = baseUrl.searchParams

    //appending all searchParams
    filter.careerLevel.map((career,idx)=>{
        searchParams.append(`filters[career_level][${idx}]`,career)        
    })
    filter.jobType.map((type,idx)=>{
        searchParams.append(`filters[job_types][${idx}]`,type)
    })
    filter.industry.map((industry,idx)=>{
        searchParams.append(`filters[roles][${idx}]`,industry)
    })
    searchParams.append('filters[years_of_experience_min][0]',filter.experienceMin)
    searchParams.append('filters[years_of_experience_max][0]',filter.experienceMax)
    searchParams.append('q',search)

    return baseUrl
}

export function searchQuery(query:IQuery){
    return generateUrl(query.url,query.filters,query.search)
}
