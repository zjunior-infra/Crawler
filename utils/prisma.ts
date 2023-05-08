import { PrismaClient } from '@prisma/client'
import { Job } from '../types/modules'
const prisma = new PrismaClient()

export async function PushJobs(Jobs:Job[]) {
    try{
        const jobs= await prisma.crawledJob.createMany({
            data:[
                ...Jobs
            ],
            skipDuplicates:true
        }
        )
        return jobs
    }
    catch (err:any){
        console.error(err.message, err)
    }
    
}

