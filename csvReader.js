import csv from 'csvtojson'

export default async function readCSV(path){
    const csvData = await csv().fromFile(path)
    // validate that necessary fields exist
    csvData.forEach((entry) => {
        if(!entry.Category || !entry['Transaction Type']){
            console.error(`
            Required Columns don't exist on entry with the description:
            ${entry.Description  ? entry.Description : 'Unknown'}
            `)
        }
    })
    return csvData
}