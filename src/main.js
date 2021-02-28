import getInput from './cliInput'
import { determineFullInput, determineFullOutput } from './io'
import formatValues from './formatter'
import readCSV from './csvReader'
import writeCSV from './csvWriter'

function writeDataOut(data, outputPath, isRemoved=false){
    const completeOutputPath = determineFullOutput(data, outputPath, isRemoved)
    writeCSV(completeOutputPath, data)
}

async function main(){
    const {
        eliminatedCategories: originalEliminatedCategories,
        inputPath,
        outputPath
    } = await getInput()
    
    const eliminatedCategories = originalEliminatedCategories.map((category) => category.toLowerCase())

    const completeInputPath = determineFullInput(inputPath)

    const csvData = await readCSV(completeInputPath)
    const { validTransactions: cleanedData, removedTransactions } = formatValues(eliminatedCategories, csvData)

    writeDataOut(cleanedData, outputPath)
    writeDataOut(removedTransactions, outputPath, true)
}

main()