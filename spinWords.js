// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

console.log(spinWords("Hey fellow warriors"))
// spinWords("Hey fellow warriors");
function spinWords(string) {
    const word = String(string);
    const arrWords = word.split(' ');

    return (
        arrWords.map(word => 
            word.length >= 5 
            ? [...word].reverse().join('') 
            : word
        ).join(' ')
    )
}