import * as fs from "fs"

export function writeFile({ filePath, content }) {
    return fs.writeFileSync(filePath, JSON.stringify(content))
}
