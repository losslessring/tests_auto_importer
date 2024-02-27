import * as fs from "fs"

export function scanDirectory(dir) {
    return fs.readdirSync(dir)
}
