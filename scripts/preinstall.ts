import type { TCounter } from "./utils";
import { checkIfDevMode, countFilesAndDirectoriesFromPath } from "./utils";

function preInstall(): void {
    console.log("-- preinstall --");
    const isDevMode = checkIfDevMode();
    console.log(`Are we in the development mode ? ${isDevMode ? "YES" : "NO"}`);

    const count: TCounter = countFilesAndDirectoriesFromPath("./");
    console.log(`number of files: ${count.files} and number of directories: ${count.dirs}`);
}

preInstall();
