import path from 'path';
import fs from 'fs';

export function determineFullInput(cliInputPath){
    const basePath = path.join(__dirname, '..').substring(0, __dirname.lastIndexOf('/'));
    const inputPath = path.join(basePath, './data', cliInputPath);
    if(!fs.existsSync(inputPath)){
        console.log(`Input file could not be found at: ${inputPath}`);
    }
    return inputPath;
}

export function determineFullOutput(data, outputPath, isRemoved=false){
    const firstDate = data[0].Date
    const date = new Date(firstDate)
    const month = date.toLocaleString('default', { month: 'long' });
    const fileName = `${month}-transactions${isRemoved ? '-removed' : ''}.csv`
    return path.join(outputPath, fileName)
}