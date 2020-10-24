import getInput from './cliInput'
import { determineFullInput, determineFullOutput } from './io'
import formatValues from './formatter'
import readCSV from './csvReader'
import writeCSV from './csvWriter'

async function main(){
    const {
        eliminatedCategories: originalEliminatedCategories,
        inputPath,
        outputPath
    } = await getInput()
    
    const eliminatedCategories = originalEliminatedCategories.map((category) => category.toLowerCase())

    const completeInputPath = determineFullInput(inputPath)

    const csvData = await readCSV(completeInputPath)
    const cleanedData = formatValues(eliminatedCategories, csvData)

    const completeOutputPath = determineFullOutput(cleanedData, outputPath)
    writeCSV(completeOutputPath, cleanedData)
}

main()