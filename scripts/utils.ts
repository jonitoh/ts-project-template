import fs from "fs";

export function checkIfDevMode() {
    return process.env.NODE_ENV === "development";
}

export type CountType = {
    files: number;
    dirs: number;
};

export function countFilesAndDirectoriesFromPath(entry: string): CountType {
    const isPathADir: boolean[] = fs
        .readdirSync(entry)
        .map((pth) => fs.lstatSync(`${entry}/${pth}`).isDirectory());

    return {
        files: isPathADir.filter((s) => !s).length,
        dirs: isPathADir.filter((s) => s).length,
    };
}
