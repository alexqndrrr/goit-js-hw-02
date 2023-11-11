'use strict'

function makeTransaction(quantity, pricePerDroid, customerCredits) {
    
    const orderAmount = pricePerDroid * quantity;
    
    if (orderAmount > customerCredits) {
        return 'Insufficient funds!';
    }
    
    else {
        return `You ordered ${quantity} droids worth ${orderAmount} credits!`
    }
}

console.log(makeTransaction(5, 3000, 23000));
console.log(makeTransaction(3, 1000, 15000)); 
console.log(makeTransaction(10, 5000, 8000)); 
console.log(makeTransaction(8, 2000, 10000)); 
console.log(makeTransaction(10, 500, 5000));