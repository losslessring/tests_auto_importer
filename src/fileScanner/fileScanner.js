import { glob } from "glob"

import { promises as fs } from "fs"

const testFiles = await glob("**/*.test.js", { ignore: "node_modules/**" })

const path = "./src/fileScanner/test_files.json"

await fs.writeFile(path, JSON.stringify(testFiles))
