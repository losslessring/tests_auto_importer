export function createExportsFromArray({
    exportName,
    importNames,
    joinSymbols,
}) {
    const importNamesDestructuredString = importNames
        .map((importName) => `...${importName}`)
        .join(joinSymbols)
    const withAddedBrackets = `{${importNamesDestructuredString}}`
    const withExport = `export const ${exportName} = ${withAddedBrackets}`

    return withExport
}
