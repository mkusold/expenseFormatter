import path from 'path'

export function determineFullInput(cliInputPath){
    const basePath = __dirname.substring(0, __dirname.lastIndexOf('/'));
    return path.join(basePath, cliInputPath)
}

export function determineFullOutput(data, outputPath){
    const firstDate = data[0].Date
    const date = new Date(firstDate)
    const month = date.toLocaleString('default', { month: 'long' });
    const fileName = `${month}-transactions.csv`
    return path.join(outputPath, fileName)
}