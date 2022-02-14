"use strict";
exports.__esModule = true;
exports.Challenge = void 0;
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.getMiddle = function (s) {
        var stringLength = s.length;
        var isOdd = stringLength % 2 === 0;
        var middle = isOdd ? stringLength / 2 : Math.floor(stringLength / 2);
        return isOdd ? s.slice(middle - 1, middle + 1) : s.slice(middle, middle + 1);
    };
    return Challenge;
}());
exports.Challenge = Challenge;
var res = Challenge.getMiddle("test");
console.log(res);
res = Challenge.getMiddle("testing");
console.log(res);
