function createPhoneNumber(numbers) {
    var numberString = numbers.join("");
    var phoneNumber = "(".concat(numberString.slice(0, 3), ") ").concat(numberString.slice(3, 6), "-").concat(numberString.slice(6));
    return phoneNumber;
}
var res = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(res);
