export class G964 {
    public static nbYear = (p0: number, percent: number, aug: number, p: number): number => {
        let currentPopulation = p0;
        percent = percent / 100;
        let years = 0;

        for (years; currentPopulation < p; years++) {
            let anualIncrement = Math.floor(currentPopulation * percent);            
            currentPopulation = currentPopulation + anualIncrement + aug;
        }

        return years;
    };
}
