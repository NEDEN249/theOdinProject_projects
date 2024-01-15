const analyseArray = (arr) => {
    const average = arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
    //acc = accumulator
    //pass in accumulator and current value (like the i in a for loop)
    //return accumulator + current value
    //the 0 is just specifying what the accumulator should start at
    //than divide the result by the length
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;
    return { average, min, max, length };
}

module.exports = analyseArray;