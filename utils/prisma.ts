import { CrawledOpportunity, OpportunityArchive, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function PushJobs(Jobs:CrawledOpportunity[]) {
    try{
        const ids:OpportunityArchive[] = Jobs.map(Job=>{
            return {id:Job.id};
        })
        const archive = await prisma.opportunityArchive.createMany({
            data:[
                ...ids
            ]
        })
    }
    catch(err:any){
        console.error(err.message,err)
    }
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

