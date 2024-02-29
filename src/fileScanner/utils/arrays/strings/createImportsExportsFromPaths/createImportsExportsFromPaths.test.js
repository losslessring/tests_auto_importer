import { describe } from "../../../../testingLibrary/testingLibrary.js"
import { it } from "../../../../testingLibrary/testingLibrary.js"
import { expect } from "../../../../testingLibrary/testingLibrary.js"
import { createImportsExportsFromPaths } from "./createImportsExportsFromPaths.js"

export const createImportsExportsFromPaths_test = () => {
    describe("create imports and exports from paths", () => {
        it("create imports and exports from paths", () => {
            const filePaths = [
                "src/fileScanner/scanDirectoryTree/tests/directoryTree/fileAtLevel0.test.js",
                "src/fileScanner/scanDirectoryTree/tests/directoryTree/level0/level1/fileAtLevel1.test.js",
                "src/fileScanner/scanDirectoryTree/tests/directoryTree/level0/level1/level2/fileAtLevel2.test.js",
                "src/fileScanner/scanDirectoryTree/tests/directoryTree/level0/level1/level2/level3/fileAtLevel3.test.js",
            ]

            const expected = [
                "import * as test_0 from 'src/fileScanner/scanDirectoryTree/tests/directoryTree/fileAtLevel0.test.js'\n",
                "import * as test_1 from 'src/fileScanner/scanDirectoryTree/tests/directoryTree/level0/level1/fileAtLevel1.test.js'\n",
                "import * as test_2 from 'src/fileScanner/scanDirectoryTree/tests/directoryTree/level0/level1/level2/fileAtLevel2.test.js'\n",
                "import * as test_3 from 'src/fileScanner/scanDirectoryTree/tests/directoryTree/level0/level1/level2/level3/fileAtLevel3.test.js'\n",
                "export const tests = {...test_0,\n...test_1,\n...test_2,\n...test_3}",
            ]

            const result = createImportsExportsFromPaths({
                filePaths,
                importName: "test_",
                exportName: "tests",
                exportJoinSymbols: ",\n",
            })

            expect(result).toBe(expected)
        })
    })
}
