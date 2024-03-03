import { describe } from "../../../../testingLibrary/testingLibrary.js"
import { it } from "../../../../testingLibrary/testingLibrary.js"
import { expect } from "../../../../testingLibrary/testingLibrary.js"

import { createImportNamesFromArrayIndexes } from "./createImportNamesFromArrayIndexes.js"

export const createImportNamesFromArrayIndexes_test = () => {
    describe("create import names from array indexes", () => {
        it("create import names from array indexes", () => {
            const expected = ["test_0", "test_1", "test_2", "test_3"]

            const result = createImportNamesFromArrayIndexes({
                array: ["a", "b", "c", "d"],
                name: "test_",
            })

            expect(result).toBe(expected)
        })
    })
}
