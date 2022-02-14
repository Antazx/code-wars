export function duplicateEncode(word: string) {
    const charList = word.split("");
    const symbolList = [];
    const appearances = {};
    for (let index in charList) {
        //sconsole.log(appearances[charList[index]]);
        appearances[charList[index]] = appearances[charList[index]] != undefined ? ")" : "(";
        //console.log(appearances);
    }
    return appearances;
}

