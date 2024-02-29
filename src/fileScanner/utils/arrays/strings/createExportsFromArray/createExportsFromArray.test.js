import { describe } from "../../../../testingLibrary/testingLibrary.js"
import { it } from "../../../../testingLibrary/testingLibrary.js"
import { expect } from "../../../../testingLibrary/testingLibrary.js"

import { createExportsFromArray } from "./createExportsFromArray.js"

export const createExportsFromArray_test = () => {
    describe("create exports from array", () => {
        it("create exports from array", () => {
            const expected = `export const tests = {...test_0,\n...test_1,\n...test_2,\n...test_3}`

            const result = createExportsFromArray({
                exportName: "tests",
                importNames: ["test_0", "test_1", "test_2", "test_3"],
                joinSymbols: ",\n",
            })

            expect(result).toBe(expected)
        })
    })
}
