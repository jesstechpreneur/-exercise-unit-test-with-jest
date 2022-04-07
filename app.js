let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

// Declare the function "fromDollarToYen"
const fromDollarToYen = function(valueInDollar){
    //convert the value in dollar to Yen
    let valueInYen = (valueInDollar / 1.2)* 127.9;
    // return the Yen Value 
    return valueInYen;
}
// This is the function "fromYenToPound"
const fromYenToPound = function(valueInYen){
    //convert to Pound
    let valueInPound = (valueInYen / 127.9)*0.8;
    // return how much
    return valueInPound;
}


// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = {sum,fromEuroToDollar, fromDollarToYen, fromYenToPound };

