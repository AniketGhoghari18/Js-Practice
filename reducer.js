// reduce refers to a function that reduces an array or collection to a single value. It processes elements of the array one by one and applies a transformation based on an accumulator pattern.

// const transactions = [
//     { type: 'deposit', amount: 100 },
//     { type: 'withdrawal', amount: 50 },
//     { type: 'deposit', amount: 200 },
//     { type: 'withdrawal', amount: 30 },
//     { type: 'deposit', amount: 150 }
// ];

// const balance = transactions.reduce((acc, transaction) => {
//     if(transaction.type == 'deposit')
//         return acc + transaction.amount
//     else return acc - transaction.amount
// },0)
// console.log(balance)


const products = [
    { name: 'Apple', category: 'Fruit' },
    { name: 'Carrot', category: 'Vegetable' },
    { name: 'Banana', category: 'Fruit' },
    { name: 'Broccoli', category: 'Vegetable' }
]

const pc = products.reduce((acc,product) => {
    
    if(!acc[product.category]){
        acc[product.category] = []
    }
    acc[product.category].push(product)
    return acc
},{})
console.log(pc);
