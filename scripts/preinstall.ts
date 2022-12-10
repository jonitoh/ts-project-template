import getLogger from "../src/lib/logger";
import type { TCounter } from "./utils";
import { checkIfDevMode, countFilesAndDirectoriesFromPath } from "./utils";

const log = getLogger({ filepath: __filename });
function preInstall(): void {
    log.info("-- preinstall --");
    const isDevMode = checkIfDevMode();
    log.info(`Are we in the development mode ? ${isDevMode ? "YES" : "NO"}`);

    const count: TCounter = countFilesAndDirectoriesFromPath("./");
    log.info(`infos on repository`, count);
}

preInstall();
