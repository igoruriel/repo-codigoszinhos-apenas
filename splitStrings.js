// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

solution('abcd');

function solution(str){
    const x = [String(str)];
    
    x.forEach((xEl, i) => {
        const y = xEl.charAt(i).concat(xEl.charAt(i+1));
        
    })
}