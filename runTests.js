// import { tests } from "./testsAutoImport.js"

import { tests } from "./build/tests/tests.js"

function runAllAutomatedTests() {
    const testFunctions = Object.values(tests)
    testFunctions.forEach((testFunction) => {
        testFunction()
    })
}

runAllAutomatedTests()
