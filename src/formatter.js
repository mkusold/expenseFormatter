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

    // reverse the cost values for remaining credited items
    const creditedTransactions = cleanedTransactions.map((transaction) => {
        return (transaction['Transaction Type'].toLowerCase() === 'credit') ? 
            {
                ...transaction,
                Amount: `-${transaction.Amount}`,
            }
            : transaction
    })
    return {
        validTransactions: creditedTransactions,
        removedTransactions,
    }
}