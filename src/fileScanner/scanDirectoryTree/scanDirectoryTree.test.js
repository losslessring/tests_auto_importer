import { describe } from "../testingLibrary/testingLibrary.js"
import { it } from "../testingLibrary/testingLibrary.js"
import { expect } from "../testingLibrary/testingLibrary.js"

import { scanDirectoryTree } from "./scanDirectoryTree.js"

export const scanDirectoryTree_test = () => {
    describe("scan directory scan directory and return all files and one level of subdirectories", () => {
        it("scan directory and return single file in folder", async () => {
            const expected = [
                "src\\fileScanner\\scanDirectoryTree\\tests\\singleFile\\singleFile.tst.js",
            ]
            const result = await scanDirectoryTree({
                pattern:
                    "src/fileScanner/scanDirectoryTree/tests/singleFile/singleFile.tst.js",
                // options: { ignore: "node_modules/**" },
            })
            expect(result).toBe(expected)
        })

        it("scan directory and return 3 files from 3 levels of subfolders", async () => {
            const expected = [
                "src\\fileScanner\\scanDirectoryTree\\tests\\directoryTree\\fileAtLevel0.tst.js",
                "src\\fileScanner\\scanDirectoryTree\\tests\\directoryTree\\level0\\level1\\fileAtLevel1.tst.js",
                "src\\fileScanner\\scanDirectoryTree\\tests\\directoryTree\\level0\\level1\\level2\\fileAtLevel2.tst.js",
                "src\\fileScanner\\scanDirectoryTree\\tests\\directoryTree\\level0\\level1\\level2\\level3\\fileAtLevel3.tst.js",
            ]
            const result = await scanDirectoryTree({
                pattern:
                    "src/fileScanner/scanDirectoryTree/tests/directoryTree/**/*.tst.js",
                // options: { ignore: "node_modules/**" },
            })
            expect(result).toBe(expected)
        })
    })
}
