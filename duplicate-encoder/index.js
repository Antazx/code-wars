"use strict";
exports.__esModule = true;
exports.duplicateEncode = void 0;
/*
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
*/
function duplicateEncode(word) {
    var charList = word.split("");
    var symbolList = [];
    var appearances = {};
    for (var index in charList) {
        //sconsole.log(appearances[charList[index]]);
        appearances[charList[index]] = appearances[charList[index]] != undefined ? ")" : "(";
        //console.log(appearances);
    }
    return appearances;
}
exports.duplicateEncode = duplicateEncode;
var res = duplicateEncode("din");
console.log(res);
res = duplicateEncode("recede");
console.log(res);
res = duplicateEncode("Success");
console.log(res);
res = duplicateEncode("(( @");
console.log(res);
