import { scanDirectoryTree } from "./src/testsAutoImporter/scanDirectoryTree/scanDirectoryTree.js"
import { writeFile } from "./src/testsAutoImporter/writeFile/writeFile.js"

import { createImportsExportsFromPaths } from "./src/testsAutoImporter/utils/arrays/strings/createImportsExportsFromPaths/createImportsExportsFromPaths.js"

async function scanDirectoryAndCreateImportFile() {
    const testFilesPaths = await scanDirectoryTree({
        pattern: "src/testsAutoImporter/**/*.test.js",
        options: {
            ignore: "node_modules/**",
            posix: true,
            dotRelative: true,
        },
    })

    const imports = createImportsExportsFromPaths({
        filePaths: testFilesPaths,
        importName: "test_",
        exportName: "tests",
        exportJoinSymbols: ",",
    })

    const path = "./testsAutoImport.js"

    await writeFile({
        filePath: path,
        content: imports,
    })
}

scanDirectoryAndCreateImportFile()
