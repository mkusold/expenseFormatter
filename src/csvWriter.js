import { json2csv } from 'json-2-csv'
import fs from 'fs'

export default function writeCSV(outputPath, jsonValues){
    json2csv(jsonValues, (err, csv) => {
        if (err) {
            throw err;
        }
        fs.writeFileSync(outputPath, csv);
    });
}