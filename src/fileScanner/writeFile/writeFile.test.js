import { describe } from "../testingLibrary/testingLibrary.js"
import { it } from "../testingLibrary/testingLibrary.js"
import { expect } from "../testingLibrary/testingLibrary.js"
import * as fs from "fs"

import { writeFile } from "./writeFile.js"

export const writeFile_test = () => {
    describe("write file", () => {
        it("write data to a file", () => {
            const filePath =
                "./src/fileScanner/tests/writeFile/writeFileTest.json"

            const content = "test"

            const expected = "test"

            writeFile({ filePath, content })

            const result = JSON.parse(
                fs.readFileSync(
                    "./src/fileScanner/tests/writeFile/writeFileTest.json"
                )
            )

            expect(result).toBe(expected)
        })
    })
}
