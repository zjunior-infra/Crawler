import { CrawledOpportunity, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function PushJobs(Jobs:CrawledOpportunity[]) {
    try{
        const jobs= await prisma.crawledOpportunity.createMany({
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

