import { IFilter } from "../../types/modules"

const newurl = new URL('https://wuzzuf.net/search/jobs/?a=hpb&filters%5Bcareer_level%5D%5B0%5D=Entry%20Level&filters%5Bcareer_level%5D%5B1%5D=Student&filters%5Bjob_types%5D%5B0%5D=full_time&filters%5Bjob_types%5D%5B1%5D=internship&filters%5Broles%5D%5B0%5D=Engineering%20-%20Telecom%2FTechnology&filters%5Broles%5D%5B1%5D=IT%2FSoftware%20Development&filters%5Byears_of_experience_max%5D%5B0%5D=3&filters%5Byears_of_experience_min%5D%5B0%5D=0&q=Software%20engineer')
const filters:IFilter = {
    careerLevel: ['Entry Level','Student'],
    jobType: ['Full time','Internship'],
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
export function generateUrl(baseUrl:string ,filter:IFilter = filters){    
    const url = new URL(baseUrl);
    const searchParams = url.searchParams
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
    searchParams.append('q','Software engineer')

    console.log(decodeURI(url.href))
    
}

function searchQuery(title:string){

}