import path from 'path'

export function determineFullInput(cliInputPath){
    const basePath = path.join(__dirname, '../../').substring(0, __dirname.lastIndexOf('/'));
    const fullInputPath = path.join(basePath, cliInputPath)
    console.log('full input', fullInputPath)
    return fullInputPath
}

export function determineFullOutput(data, outputPath){
    const firstDate = data[0].Date
    const date = new Date(firstDate)
    const month = date.toLocaleString('default', { month: 'long' });
    const fileName = `${month}-transactions.csv`
    return path.join(outputPath, fileName)
}