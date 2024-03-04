import { scanDirectoryTree } from "../scanDirectoryTree/scanDirectoryTree.js"
import { writeFile } from "../writeFile/writeFile.js"

import { createImportsExportsFromPaths } from "../utils/arrays/strings/createImportsExportsFromPaths/createImportsExportsFromPaths.js"

export async function scanDirectoryAndCreateImportFile({
    testsDirectoryPattern,
}) {
    const testFilesPaths = await scanDirectoryTree({
        pattern: testsDirectoryPattern,
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
