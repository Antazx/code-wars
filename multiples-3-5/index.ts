const isMult = (num: number): boolean => num % 3 === 0 || num % 5 === 0;
function solution(number: number): number {
    if (number < 0) return 0;
    let result = 0;
    for (let index = number - 1; index > 0; index--) {
        result += isMult(index) ? index : 0;
    }
    return result;
}
