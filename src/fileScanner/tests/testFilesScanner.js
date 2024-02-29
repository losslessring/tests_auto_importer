import { scanDirectoryTree } from "../scanDirectoryTree/scanDirectoryTree.js"
import { fixPathsBackSlashes } from "../utils/arrays/strings/fixPathsBackSlashes/fixPathsBackSlashes.js"
import { writeFile } from "../writeFile/writeFile.js"

import { createImportsExportsFromPaths } from "../utils/arrays/strings/createImportsExportsFromPaths/createImportsExportsFromPaths.js"

console.log(process.cwd())
const testFilesPaths = await scanDirectoryTree({
    pattern: "src/fileScanner/**/*.test.js",
    options: {
        ignore: "node_modules/**",
        posix: true,
        // cwd: process.cwd(),
        dotRelative: true,
    },
})

console.log(testFilesPaths)

// const pathsFixedBackSlashes = fixPathsBackSlashes(testFilesPaths)
// console.log(pathsFixedBackSlashes)

const imports = createImportsExportsFromPaths({
    filePaths: testFilesPaths,
    importName: "test_",
    exportName: "tests",
    exportJoinSymbols: ",",
})
// console.log(imports)

const path = "./src/fileScanner/tests/testsAutoImport.js"

await writeFile({
    filePath: path,
    content: imports,
})
