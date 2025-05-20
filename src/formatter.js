import { CATEGORY_COLUMNS, OUTPUT_COLUMNS } from './constants';

const formatOutput = (transaction) => {
    const output = {}
    for(const column of OUTPUT_COLUMNS){
        output[column] = transaction[column]
    }
    return output;
}

export default function formatValues(eliminatedCategories, transactions){
    // delete entries with the blacklisted categories
    const cleanedTransactions = [];
    const removedTransactions = [];
    for(let i=0; i<transactions.length; i++){
        const transaction = transactions[i];
        const isMatch = CATEGORY_COLUMNS.some((column) => eliminatedCategories.includes(transaction[column].toLowerCase()))
        if(isMatch){
            removedTransactions.push(transaction);
        } else {
            cleanedTransactions.push(transaction);
        }
    }
    console.log(`Removed ${removedTransactions.length} entries`)

    return {
        validTransactions: cleanedTransactions.map(formatOutput),
        removedTransactions: removedTransactions.map(formatOutput),
    }
}