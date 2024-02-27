import { tests } from "./testsExport.js"

function runAllAutomatedTests() {
    const testFunctions = Object.values(tests)
    testFunctions.forEach((testFunction) => {
        testFunction()
    })
}

runAllAutomatedTests()
