export default function formatValues(eliminatedCategories, transactions){
    // delete entries with the blacklisted categories
    const cleanedTransactions = transactions.filter((transaction) => {
        const isMatch = eliminatedCategories.includes(transaction.Category.toLowerCase())
        return !isMatch
    })
    console.log(`Removed ${transactions.length - cleanedTransactions.length} entries`)

    // reverse the cost values for remaining credited items
    const creditedTransactions = cleanedTransactions.map((transaction) => {
        return (transaction['Transaction Type'].toLowerCase() === 'credit') ? 
            {
                ...transaction,
                Amount: `-${transaction.Amount}`,
            }
            : transaction
    })
    return creditedTransactions
}