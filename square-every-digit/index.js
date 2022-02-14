"use strict";
exports.__esModule = true;
exports.Kata = void 0;
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.squareDigits = function (num) {
        var stringNumber = num.toString();
        var numberList = stringNumber.split("");
        var squareList = [];
        for (var _i = 0, numberList_1 = numberList; _i < numberList_1.length; _i++) {
            var n = numberList_1[_i];
            squareList.push(Math.pow(parseInt(n), 2));
        }
        return parseInt(squareList.join(""));
    };
    return Kata;
}());
exports.Kata = Kata;
var test = 9119;
var result = Kata.squareDigits(test);
console.log(result);
