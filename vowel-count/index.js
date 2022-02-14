function getCount(str) {
    var VOWELS = ["a", "e", "i", "o", "u"];
    var vowelsCount = 0;
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (VOWELS.indexOf(char) != -1)
            vowelsCount++;
    }
    return vowelsCount;
}
var res = getCount("aaaaaaaa");
console.log(res);
