import { cp } from "fs";

export function parse(data: string): number[] {
    const sum = (num: number): Function => (value: number): number => value + num;
    const square = (num: number): Function => (value: number) => value ** num;
    const filterCommands = (data: string): string[] => data.split("").filter(c => ALLOWED_COMMANDS.includes(c)); 

    const ALLOWED_COMMANDS = ["i", "s", "d", "o"];
    const COMMAND_MAPPING: {[key: string]: Function} = {
        i: sum(1),
        d: sum(-1),
        s: square(2),
    };

    let commandList = filterCommands(data);
    let currentValue = 0;
    let returnList: number[] = [];

    for(let command of commandList) {
        if(command === 'o') returnList.push(currentValue);
        else currentValue = COMMAND_MAPPING[command](currentValue);
    }

  return returnList;
}

console.log(parse("iiisdoso"));