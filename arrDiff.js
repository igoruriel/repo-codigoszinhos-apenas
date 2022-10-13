
const print = (value) => console.log(value);

// print(arrayDiff([1,2,2,3], [2]));
arrayDiff([1, 2, 2, 3, 4], [2, 4]);

function arrayDiff(a, b) {
    const x = [...a];
    const y = [...b];
    if(x.length === 0) return x

    const xFilter = x.filter(xElem => !y.includes(xElem))
    return xFilter
}
