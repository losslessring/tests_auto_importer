import * as R from "ramda"

class TestMatchers {
    constructor(actual) {
        this.actual = actual
    }

    toBe(expected) {
        if (R.equals(expected, this.actual)) {
            console.log("\x1b[32mSucceeded\x1b[0m")
        } else {
            throw new Error(
                `\x1b[31mTest failed\nActual:\n${JSON.stringify(this.actual)}
                \nExpected:\n${JSON.stringify(expected)}\n\x1b[90m`
            )
        }
    }

    toBeTruthy() {
        if (this.actual) {
            console.log(`Succeeded`)
        } else {
            console.log(
                `Fail - Expected value to be truthy but got ${this.actual}`
            )
            throw new Error(
                `Fail - Expected value to be truthy but got ${this.actual}`
            )
        }
    }
}

export function expect(actual) {
    return new TestMatchers(actual)
}

export function describe(suiteName, fn) {
    try {
        console.log(`suite: ${suiteName}`)
        fn()
    } catch (err) {
        console.log(err.message)
    }
}

export function it(testName, fn) {
    console.log(`test: ${testName}`)
    try {
        fn()
    } catch (err) {
        console.log(err)
        throw new Error("\x1b[31mtest run failed\x1b[0m")
    }
}
