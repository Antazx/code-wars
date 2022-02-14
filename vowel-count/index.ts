function getCount(str) {
    const VOWELS = ["a", "e", "i", "o", "u"];
    let vowelsCount = 0;
    for (let char of str) {
        if (VOWELS.indexOf(char) != -1) vowelsCount++;
    }
    return vowelsCount;
}

let res = getCount("aaaaaaaa");
console.log(res);
