import { scanDirectoryTree } from "./src/fileScanner/scanDirectoryTree/scanDirectoryTree.js"
import { writeFile } from "./src/fileScanner/writeFile/writeFile.js"

import { createImportsExportsFromPaths } from "./src/fileScanner/utils/arrays/strings/createImportsExportsFromPaths/createImportsExportsFromPaths.js"

const testFilesPaths = await scanDirectoryTree({
    pattern: "src/fileScanner/**/*.test.js",
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
