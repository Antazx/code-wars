String.prototype.toJadenCase = function () {
    let wordList = this.split(" ");
    return wordList.map(([firstLeter, ...rest]) =>
        `${firstLeter.toLocaleUpperCase()}${rest}`).join(" ");
};

  