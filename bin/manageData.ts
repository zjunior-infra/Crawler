import type {Job} from '../types/types'
import { PushJobs } from '../utils/prisma';
export class managedata{
    data: Job[] = [];
    managedata(dataJobs:dataJob[]){
        this.datatoJobType(dataJobs)
    }
    PushtoDB(){
        //this will remove duplicates by the id 
        PushJobs(this.data);
    }
    datatoJobType(data:dataJob[]){
        data.forEach(job=>{
            this.data.push({...job})
        })
    }
}
interface dataJob{
    id:string,
    title:string,
    company:string,
    link:string,
    skills:string,
    deadline:string,
    type:string,
    logo:string
}

// he will send array 