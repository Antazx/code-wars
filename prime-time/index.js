function getPrimes(count) {
    var numberList = new Array(count).fill(0);
    numberList = numberList.map(function (e, index) { return index + 1; });
    return numberList.filter(isPrime);
}
function isPrime(num) {
    var sqrt = Math.sqrt(num);
    for (var index = 2; index <= sqrt; index++) {
        if (num % index === 0)
            return false;
    }
    return num > 1;
}
