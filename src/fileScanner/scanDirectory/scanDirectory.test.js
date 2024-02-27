import { describe } from "../testingLibrary/testingLibrary.js"
import { it } from "../testingLibrary/testingLibrary.js"
import { expect } from "../testingLibrary/testingLibrary.js"

import { scanDirectory } from "./scanDirectory.js"

export const scanDirectory_test = () => {
    describe("scan directory scan directory and return all files and one level of subdirectories", () => {
        it("scan directory and return single file in folder", () => {
            const dir = "./src/fileScanner/tests/singleFile"

            const expected = ["singleFile.test.js"]

            const result = scanDirectory(dir)
            expect(result).toBe(expected)
        })
    })
}
