export class Kata {
    static squareDigits(num: number): number {
      const stringNumber = num.toString();
      const numberList = stringNumber.split("");
      const squareList: number[] = [];

      for(let n of numberList) {
        squareList.push(parseInt(n) ** 2);
      }

      return parseInt(squareList.join(""));
    }
}
