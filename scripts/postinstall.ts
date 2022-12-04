import type { TCounter } from "./utils";
import { countFilesAndDirectoriesFromPath } from "./utils";

function postInstall(): void {
    console.log("-- postinstall --");

    const count: TCounter = countFilesAndDirectoriesFromPath("./");
    console.log(`number of files: ${count.files} and number of directories: ${count.dirs}`);
}

postInstall();
