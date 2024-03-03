import { createExportsFromArray } from "../createExportsFromArray/createExportsFromArray.js"
import { createImportNamesFromArrayIndexes } from "../createImportNamesFromArrayIndexes/createImportNamesFromArrayIndexes.js"
import { createImportsFromPaths } from "./../createImportsFromPaths/createImportsFromPaths.js"

export function createImportsExportsFromPaths({
    filePaths,
    importName,
    exportName,
    exportJoinSymbols,
}) {
    const imports = createImportsFromPaths({
        filePaths,
        importName,
    })

    const exports = createExportsFromArray({
        exportName,
        importNames: createImportNamesFromArrayIndexes({
            array: filePaths,
            name: importName,
        }),
        joinSymbols: exportJoinSymbols,
    })

    const importsExports = imports.concat(exports)

    return importsExports
}
