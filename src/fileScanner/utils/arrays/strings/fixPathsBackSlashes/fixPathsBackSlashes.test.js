import { describe } from "../../../../testingLibrary/testingLibrary.js"
import { it } from "../../../../testingLibrary/testingLibrary.js"
import { expect } from "../../../../testingLibrary/testingLibrary.js"

import { fixPathsBackSlashes } from "./fixPathsBackSlashes.js"

export const fixPathsBackSlashes_test = () => {
    describe("fix paths backslashes", () => {
        it("fix paths backslashes", () => {
            const filePaths = [
                "src\\fileScanner\\scanDirectoryTree\\tests\\directoryTree\\fileAtLevel0.test.js",
                "src\\fileScanner\\scanDirectoryTree\\tests\\directoryTree\\level0\\level1\\fileAtLevel1.test.js",
                "src\\fileScanner\\scanDirectoryTree\\tests\\directoryTree\\level0\\level1\\level2\\fileAtLevel2.test.js",
                "src\\fileScanner\\scanDirectoryTree\\tests\\directoryTree\\level0\\level1\\level2\\level3\\fileAtLevel3.test.js",
            ]

            const expected = [
                "src/fileScanner/scanDirectoryTree/tests/directoryTree/fileAtLevel0.test.js",
                "src/fileScanner/scanDirectoryTree/tests/directoryTree/level0/level1/fileAtLevel1.test.js",
                "src/fileScanner/scanDirectoryTree/tests/directoryTree/level0/level1/level2/fileAtLevel2.test.js",
                "src/fileScanner/scanDirectoryTree/tests/directoryTree/level0/level1/level2/level3/fileAtLevel3.test.js",
            ]

            const result = fixPathsBackSlashes(filePaths)

            expect(result).toBe(expected)
        })
    })
}
