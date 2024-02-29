import { describe } from "../../../../testingLibrary/testingLibrary.js"
import { it } from "../../../../testingLibrary/testingLibrary.js"
import { expect } from "../../../../testingLibrary/testingLibrary.js"

import { createImportsFromPaths } from "./createImportsFromPaths.js"

export const createImportsFromPaths_test = () => {
    describe("create imports from paths", () => {
        it("create imports from paths", () => {
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
            ]

            const result = createImportsFromPaths({
                filePaths,
                importName: "test_",
            })

            expect(result).toBe(expected)
        })
    })
}
