import { scanDirectoryTree } from "../scanDirectoryTree/scanDirectoryTree.js"
import { writeFile } from "../writeFile/writeFile.js"

import { createImportsExportsFromPaths } from "../utils/arrays/strings/createImportsExportsFromPaths/createImportsExportsFromPaths.js"

export async function scanDirectoryAndCreateImportFile({
    testsDirectoryPattern,
    globOptions,
    importTestAs,
    exportAllTestsAs,
    exportJoinSymbols,
    exportFilePath,
}) {
    const testFilesPaths = await scanDirectoryTree({
        pattern: testsDirectoryPattern,
        options: globOptions,
    })

    const imports = createImportsExportsFromPaths({
        filePaths: testFilesPaths,
        importName: importTestAs,
        exportName: exportAllTestsAs,
        exportJoinSymbols: exportJoinSymbols,
    })

    await writeFile({
        filePath: exportFilePath,
        content: imports,
    })
}
