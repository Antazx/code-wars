const DNA_MAPPING: { [key: string]: string } = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
};

export class Kata {
    static dnaStrand(dna: string) {
        const charList = dna.split("");
        const complementaryList = [];
        for (let char of charList) {
            if (char in DNA_MAPPING) complementaryList.push(DNA_MAPPING[char]);
        }
        return complementaryList.join("");
    }
}
