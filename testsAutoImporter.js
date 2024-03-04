import { readFile } from "./src/testsAutoImporter/readFile/readFile.js"
import { scanDirectoryAndCreateImportFile } from "./src/testsAutoImporter/scanDirectoryAndCreateImportFile/scanDirectoryAndCreateImportFile.js"

const options = await readFile({
    path: "./tests-auto-importer-config.json",
    encoding: "utf8",
}).then((data) => JSON.parse(data))

const { testsDirectoryPattern } = options
scanDirectoryAndCreateImportFile({
    testsDirectoryPattern,
})
