import type { CountType } from "./utils";
import { checkIfDevMode, countFilesAndDirectoriesFromPath } from "./utils";

function preInstall() {
    console.log("-- preinstall --");
    const isDevMode = checkIfDevMode();
    console.log(`Are we in the development mode ? ${isDevMode ? "YES" : "NO"}`);

    const count: CountType = countFilesAndDirectoriesFromPath("./");
    console.log(`number of files: ${count.files} and number of directories: ${count.dirs}`);
}

preInstall();
