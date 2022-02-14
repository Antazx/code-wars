function solution(str) {
    var isOdd = str.length % 2 === 0;
    var inputString = isOdd ? str : "".concat(str, "_");
    var response = [];
    for (var index = 0; index < inputString.length; index = index + 2) {
        response.push(inputString.slice(index, index + 2));
    }
    return response;
}
console.log(solution("abc"));
console.log(solution("abcdef"));
