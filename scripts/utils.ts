import fs from "fs";

export function checkIfDevMode(): boolean {
	return process.env.NODE_ENV === "development";
}

export type TCounter = {
	files: number;
	dirs: number;
};

export function countFilesAndDirectoriesFromPath(entry: string): TCounter {
	const isPathADir: boolean[] = fs
		.readdirSync(entry)
		.map((pth) => fs.lstatSync(`${entry}/${pth}`).isDirectory());

	return {
		files: isPathADir.filter((s) => !s).length,
		dirs: isPathADir.filter((s) => s).length,
	};
}
