function solution(str: string): string[] {
    const isOdd = str.length % 2 === 0;
    const inputString = isOdd ? str : `${str}_`;
    const response = [];

    for(let index = 0; index < inputString.length; index = index + 2)  {
        response.push(inputString.slice(index, index + 2));
    }
        
    return response;
}

console.log(solution("abc"));
console.log(solution("abcdef"));