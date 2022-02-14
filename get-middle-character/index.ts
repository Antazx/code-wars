export class Challenge {
    static getMiddle(s: string) {
        const stringLength = s.length;
        const isOdd = stringLength % 2 === 0;
        const middle = isOdd ? stringLength / 2 : Math.floor(stringLength / 2);
        return isOdd ? s.slice(middle - 1, middle + 1) : s.slice(middle, middle + 1);
    }
}
