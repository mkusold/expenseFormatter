import { CATEGORY_COLUMNS, DESCRIPTION_COLUMN } from './constants';
import csv from 'csvtojson'

export default async function readCSV(path){
    const csvData = await csv().fromFile(path)
    // validate that necessary fields exist
    csvData.forEach((entry) => {
        if(!CATEGORY_COLUMNS.some((c) => entry[c])){
            console.error(`
            Required Columns don't exist on entry with the description:
            ${entry[DESCRIPTION_COLUMN] ? entry[DESCRIPTION_COLUMN] :'Unknown'}
            \n
            ${JSON.stringify(entry)}`)
        }
    })
    return csvData
}