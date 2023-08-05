export const limit:number = parseInt(process.env.LIMIT ?? '2')

export const locations = process.env.LOCATIONS?.split(',')

export const titles = process.env.TITLES?.split(',')


console.log(locations)