export default function formatValues(eliminatedCategories, transactions){
    // delete entries with the blacklisted categories
    const cleanedTransactions = [];
    const removedTransactions = [];
    for(let i=0; i<transactions.length; i++){
        const transaction = transactions[i];
        const isMatch = eliminatedCategories.includes(transaction.Category.toLowerCase())
        if(isMatch){
            removedTransactions.push(transaction);
        } else {
            cleanedTransactions.push(transaction);
        }
    }
    console.log(`Removed ${removedTransactions.length} entries`)

    return {
        validTransactions: cleanedTransactions,
        removedTransactions,
    }
}