function sommePairs(tab) {
    return tab
        .filter(num => num % 2 === 0)  
        .reduce((accum, currentVal) => accum + currentVal, 0); 
}

console.log(sommePairs([1, 2, 3, 4])); // Expected result: 6