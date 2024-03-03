export function createImportsFromPaths({ filePaths, importName }) {
    const imports = filePaths
        .map((path) => `'${path}'`)
        .map((path, index) => `import * as ${importName}${index} from ${path}`)
        .map((path) => path.concat("\n"))
    return imports
}
