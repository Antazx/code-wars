function findUniq(arr: number[]): number {
    const map: { [key: number]: number } = {};
    for (let index = 0; index < arr.length; index++) {
        map[arr[index]] = arr[index] in map
            ? map[arr[index]] + 1
            : 1;
    }
    const unique = Object.entries(map).find(([, count]) => count === 1);
    return unique ? parseFloat(unique[0]) : 0;
}
