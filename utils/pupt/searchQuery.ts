import { IFilter, IQuery } from "../../types/modules"

export const _url = new URL('https://wuzzuf.net/search/jobs/?a=hpb')
// 
export const _filters:IFilter = {
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

export class SearchQuery {
    private _query:IQuery
    private currentPage:number
    public searchUrl:URL
    constructor(query:IQuery){
        this.currentPage = 0;
        this._query = query;
        this.searchUrl = this.generateUrl();
    }


    private generateUrl():URL{    
        //appending all searchParams
        this._query.filters?.careerLevel.map((career,idx)=>{
            this._appendParam(`filters[career_level][${idx}]=${career}`);
        })
        this._query.filters?.jobType.map((type,idx)=>{
            this._appendParam(`filters[job_types][${idx}]=${type}`)
        })

        this._query.filters?.industry.map((industry,idx)=>{
            this._appendParam(`filters[roles][${idx}]=${industry}`)
        })
        this._appendParam(`filters[years_of_experience_min][0]=${this._query.filters?.experienceMin}`)
        this._appendParam(`filters[years_of_experience_max][0]=${this._query.filters?.experienceMax}`)
        this._appendParam(`q=${this._query.search}`)
        return this._query.url ?? _url
    }
    private _appendParam(param:string){
        const searchParams = this._query.url?.searchParams ?? _url.searchParams;
        const toknize = param.split('=')
        const {key,value} = {key:toknize[0],value:toknize[1]}
        searchParams.append(key,value);
    }

    public navigate(totalJobs:number){
        const Pages:number = Math.round(totalJobs/15)
        if(Pages > 0 && this.currentPage === Pages-1){
            this._query.url?.searchParams.set('start',this.currentPage.toString());
            this.currentPage++
        }
        else{
            console.log('current page is the final page')
        }
    } 
}