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
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const user = {
  id: 1,
  name: "John Doe",
  age: 21
}

//Problem 5
interface Book {
    title: string
    author: string
    publishedYear: number
}

function toggleReadStatus(book: Book) {
    return {
        ...book,
        isRead: true
    }
}

const myBook: Book = {
    title: "TypeScript Guide",
    author: "Jane Doe",
    publishedYear: 2024
}

//Problem 6
class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

class Student extends Person {
  grade: string

  constructor(name: string, age: number, grade: string) {
    super(name, age)
    this.grade = grade
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
  }
}

//Problem 7
function getIntersection(arr1: number[], arr2: number[]): number[] {
  let result: number[] = []

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result[result.length] = arr1[i]
      }
    }
  }

  return result
}

