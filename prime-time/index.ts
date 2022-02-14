function getPrimes(count: number): number[] {
    let numberList = new Array(count).fill(0);
    numberList = numberList.map((e, index) => index + 1);
    return numberList.filter(isPrime);
}

function isPrime(num: number): boolean {
    const sqrt = Math.sqrt(num);
    for (let index = 2; index <= sqrt; index++) {
        if (num % index === 0) return false;
    }
    return num > 1;
}
