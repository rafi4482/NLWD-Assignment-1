//Problem 1
function filterEvenNumbers(nums: number[]): number[] {
    const evenArray: number[] = []

    for (const num of nums) {
        if (num % 2 === 0) {
            evenArray.push(num)
        }
    }

    return evenArray
}

//Problem 2
function reverseString(str: string): string {
    let reversedStr: string = ""

    for (const char of str) {
        reversedStr = char + reversedStr
    }

    return reversedStr
}

//Problem 3
function checkType(strnum: string | number) {
    if (typeof strnum === "string") {
        return "String"
    }

    if (typeof strnum === "number") {
        return "Number"
    }
}

//Problem 4