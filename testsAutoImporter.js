import { readFile } from "./src/testsAutoImporter/readFile/readFile.js"
import { scanDirectoryAndCreateImportFile } from "./src/testsAutoImporter/scanDirectoryAndCreateImportFile/scanDirectoryAndCreateImportFile.js"

export async function testsAutoImporter({ configFilePath }) {
    const options = await readFile({
        path: configFilePath,
        encoding: "utf8",
    }).then((data) => JSON.parse(data))

    const {
        testsDirectoryPattern,
        globOptions,
        importTestAs,
        exportAllTestsAs,
        exportJoinSymbols,
        exportFilePath,
    } = options
    scanDirectoryAndCreateImportFile({
        testsDirectoryPattern,
        globOptions,
        importTestAs,
        exportAllTestsAs,
        exportJoinSymbols,
        exportFilePath,
    })
}

testsAutoImporter({ configFilePath: "./tests-auto-importer-config.json" })
