import path from 'path'

export function determineFullInput(cliInputPath){
    const basePath = path.join(__dirname, '../../').substring(0, __dirname.lastIndexOf('/'));
    return path.join(basePath, cliInputPath)
}

export function determineFullOutput(data, outputPath, isRemoved=false){
    const firstDate = data[0].Date
    const date = new Date(firstDate)
    const month = date.toLocaleString('default', { month: 'long' });
    const fileName = `${month}-transactions${isRemoved ? '-removed' : ''}.csv`
    return path.join(outputPath, fileName)
}