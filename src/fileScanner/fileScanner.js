import { scanDirectoryTree } from "./scanDirectoryTree/scanDirectoryTree.js"
import { fixPathsBackSlashes } from "./utils/fixPathsBackSlashes/fixPathsBackSlashes.js"
import { writeFile } from "./writeFile/writeFile.js"

const testFilesPaths = await scanDirectoryTree({
    pattern: "src/fileScanner/**/*.test.js",
    options: { ignore: "node_modules/**" },
})

const pathsFixedBackSlashes = fixPathsBackSlashes(testFilesPaths)

const withAddedNewLineSymbol = [
    "src/fileScanner/writeFile/writeFile.test.js",
    "\n",
    "src/fileScanner/scanDirectoryTree/scanDirectoryTree.test.js",
    "\n",
    "src/fileScanner/utils/fixPathsBackSlashes/fixPathsBackSlashes.test.js",
    "\n",
]

console.log(pathsFixedBackSlashes)
const path = "./src/fileScanner/test_files.js"

await writeFile({
    filePath: path,
    content: withAddedNewLineSymbol,
})
