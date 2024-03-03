import * as R from "ramda"

class TestMatchers {
    constructor(actual) {
        this.actual = actual
    }

    toBe(expected) {
        if (R.equals(expected, this.actual)) {
            console.log(`Succeeded`)
        } else {
            throw new Error(
                `Fail - Actual: ${JSON.stringify(
                    this.actual
                )}, Expected: ${JSON.stringify(expected)}`
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
        throw new Error("test run failed")
    }
}
