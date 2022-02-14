function createPhoneNumber(numbers: number[]): string {
    let numberString = numbers.join("");
    let phoneNumber = `(${numberString.slice(0,3)}) ${numberString.slice(3,6)}-${numberString.slice(6)}`;
    return phoneNumber;
}
