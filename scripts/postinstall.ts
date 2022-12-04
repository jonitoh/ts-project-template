import type { CountType } from "./utils";
import { countFilesAndDirectoriesFromPath } from "./utils";

function postInstall() {
    console.log("-- postinstall --");

    const count: CountType = countFilesAndDirectoriesFromPath("./");
    console.log(`number of files: ${count.files} and number of directories: ${count.dirs}`);
}

postInstall();
