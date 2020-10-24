import formatValues from './formatter'
import readCSV from './csvReader'
import writeCSV from './csvWriter'

async function main(){
    // inputs
    const inputPath = './data/transactions (7).csv'
    const outputPath = './output.csv'
    const eliminatedCategories = [
        'Paycheck',
        'Credit Card Payment',
        'Interest Income',
        'Transfer'
    ].map((category) => category.toLowerCase())

    const csvData = await readCSV(inputPath)
    const cleanedData = formatValues(eliminatedCategories, csvData)
    writeCSV(outputPath, cleanedData)
}

main()