// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollartoYen = function(valueInDollar){
    let valueinYen = valueInDollar * 127.9;
    return valueinYen;
}

const fromYentoPound = function(valueinYen){
    let valueinPound = valueinYen * 0.8;
    return valueinPound;
}

const sum = (a,b) =>{
    return a + b
}
console.log(sum(7,3))

module.exports = { sum, fromEuroToDollar, fromDollartoYen, fromYentoPound }