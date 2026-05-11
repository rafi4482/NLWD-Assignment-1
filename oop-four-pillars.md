# The Four Pillars of Object-Oriented Programming in TypeScript

## Introduction

Object-Oriented Programming (OOP) is one of the most widely used paradigms in modern software development. It is built on four core ideas — **Inheritance**, **Polymorphism**, **Encapsulation**, and **Abstraction** — that together help us write code that is easier to extend, easier to maintain, and easier to reason about. TypeScript brings these concepts to JavaScript in a clean, type-safe way. In this blog, we will walk through each pillar with practical code examples to see how they actually help in real projects.

---

## Inheritance — Stop Rewriting the Same Thing

Inheritance lets one class reuse the properties and methods of another. Instead of duplicating logic across similar classes, a child class simply *extends* a parent class. This means you have a `User`, then someone asks for an `Admin`, then a `GuestUser` — and you don't end up maintaining three copies of the same login logic.

```ts
class User {
  constructor(public name: string, public email: string) {}

  login() {
    console.log(`${this.name} logged in`)
  }
}

class Admin extends User {
  deleteUser(user: User) {
    console.log(`deleted ${user.name}`)
  }
}
```

`Admin` automatically gets the `login()` method for free. You didn't write it twice. When that logic needs to change, you change it in one place and every class that extends `User` picks it up automatically.

---

## Polymorphism — Same Method, Different Behavior

Polymorphism allows different classes to share the same method name while behaving differently. It sounds simple, but it genuinely changes how you structure code once your project starts to grow.

```ts
class Shape {
  area(): number { return 0 }
}

class Circle extends Shape {
  constructor(private radius: number) { super() }
  area(): number { return Math.PI * this.radius ** 2 }
}

class Rectangle extends Shape {
  constructor(private w: number, private h: number) { super() }
  area(): number { return this.w * this.h }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(4, 6)]
shapes.forEach(s => console.log(s.area()))
```

You loop through every shape and just call `area()`. There's no if-else checking the type. The real value shows up when you add a new shape later — you don't touch any existing code, you just add the new class and it works.

---

## Encapsulation — Keep the Internals Internal

Encapsulation means hiding the internal state of an object and exposing only what is necessary. Other parts of your code shouldn't be reaching into your classes and changing things directly.

```ts
class BankAccount {
  private balance: number = 0

  deposit(amount: number) {
    if (amount > 0) this.balance += amount
  }

  getBalance(): number {
    return this.balance
  }
}

const account = new BankAccount()
account.balance = 99999 // error
```

`private` means nothing outside the class can touch `balance` directly. You have to go through `deposit()`, which actually validates the amount. This feels like a small thing until you're debugging why some random value got mutated three files away and you have no idea what touched it.

---

## Abstraction — Hide the How, Expose the What

Abstraction is about showing only the essential features of an object and hiding the complex details. You don't explain the engine — you just hand over the steering wheel.

```ts
abstract class Notification {
  abstract send(message: string): void

  notify(message: string) {
    console.log("sending...")
    this.send(message)
  }
}

class EmailNotification extends Notification {
  send(message: string) {
    console.log(`email: ${message}`)
  }
}
```

Whoever calls `notify()` doesn't know or care how the message is delivered. Email, SMS, push notification — it doesn't matter. That detail lives inside the subclass and nowhere else. In a team where different people own different services, this is how you avoid stepping on each other constantly.

---

## Conclusion

The four pillars of OOP — Inheritance, Polymorphism, Encapsulation, and Abstraction — aren't magic. They are simply tools for organizing code so that when something breaks, you know where to look, and when something needs to change, you're not editing fifteen files to do it. TypeScript makes these patterns even more powerful by adding static type checking on top. Once you start applying them consistently, your code becomes cleaner, more reusable, and far easier to scale.
