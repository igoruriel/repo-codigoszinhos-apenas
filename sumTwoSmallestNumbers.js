//[10, 343445353, 3453445, 3453545353453] should return 3453455

sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]);

function sumTwoSmallestNumbers(numbers) {
    const x = [...numbers];
    const [a, b] = x.sort((a, b) => (a-b))
    const sum = a + b;
    return sum
}