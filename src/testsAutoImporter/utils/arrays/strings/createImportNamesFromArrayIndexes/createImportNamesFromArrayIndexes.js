export function createImportNamesFromArrayIndexes({ array, name }) {
    return array.map((_, index) => `${name}${index}`)
}
