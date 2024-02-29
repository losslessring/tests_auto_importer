import * as test0 from "../scanDirectoryTree/scanDirectoryTree.test.js"
import { writeFile_test } from "../writeFile/writeFile.test.js"
import { fixPathsBackSlashes_test } from "../utils/arrays/strings/fixPathsBackSlashes/fixPathsBackSlashes.test.js"
import * as test3 from "./../utils/arrays/strings/createImportsFromPaths/createImportsFromPaths.test.js"
import { createExportsFromArray_test } from "./../utils/arrays/strings/createExportsFromArray/createExportsFromArray.test.js"
import { createImportsExportsFromPaths_test } from "./../utils/arrays/strings/createImportsExportsFromPaths/createImportsExportsFromPaths.test.js"
import { createImportNamesFromArrayIndexes_test } from "../utils/arrays/strings/createImportNamesFromArrayIndexes/createImportNamesFromArrayIndexes.test.js"

export const tests = {
    ...test0,
    writeFile_test,
    fixPathsBackSlashes_test,
    ...test3,
    createExportsFromArray_test,
    createImportsExportsFromPaths_test,
    createImportNamesFromArrayIndexes_test,
}
