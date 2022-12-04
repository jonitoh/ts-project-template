import { getLength, toUpperCase } from "./lib";

function dummyFunction(name: string) {
    const lines: string[] = [
        `This is the name you chose: ${name}`,
        `Its uppercase version: ${toUpperCase(name)}`,
        `Its length: ${getLength(name)}`,
    ];
    return lines.map((s: string) => console.log(`${s}\n`));
}

dummyFunction("Maximilian The Third");
