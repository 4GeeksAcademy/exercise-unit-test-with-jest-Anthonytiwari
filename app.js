const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInDollar to yen
    let valueInYen = valueInDollar * 145.10;
    // return the yen value
    return valueInYen;
}

const fromYentoPound = function(valueInYen) {
    // Convert the given valueInYen to pounds
    let valueInPound = valueInYen * 194.98;
    // return the dollar value
    return valueInPound;
}


const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYentoPound };