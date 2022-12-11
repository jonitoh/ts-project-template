import getLogger from "../src/lib/logger";
import type { TCounter } from "./utils";
import { countFilesAndDirectoriesFromPath } from "./utils";

const log = getLogger({ filepath: __filename });
function postInstall(): void {
	log.info("-- postinstall --");

	const count: TCounter = countFilesAndDirectoriesFromPath("./");
	log.info(`infos on repository`, count);
}

postInstall();
