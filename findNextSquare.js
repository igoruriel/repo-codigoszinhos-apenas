// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

console.log(findNextSquare(121));

function findNextSquare(sq) {
    const x = Math.sqrt(Number(sq)) + 1;
    return x.toString().includes('.') ? -1 : (x * x)
}