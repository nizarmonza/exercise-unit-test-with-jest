

// this is my function that sums two numbers
const fromEuroToDollar = (euro) => {
    return euro * 1.2
}
const fromDollarToYen = (dollar) =>{
    return dollar / 1.2 * 127.9
}

const fromYenToPound = (yen) =>{
    return yen / 127.9 * 0.8
}

// just a console log for ourselves.


// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound};

