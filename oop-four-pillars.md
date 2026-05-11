# Inheritance — stop rewriting the same thing

You have a `User`. Then someone asks for an `Admin`. Then a `GuestUser`. If you write three separate classes from scratch you're going to spend the rest of the project maintaining three versions of the same login logic.

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

`Admin` just gets `login()` for free. You didn't write it twice. When that logic needs to change, you change it in one place and every class that extends `User` picks it up automatically. That's it, that's the whole point.

---

# Polymorphism — this one actually saves you in big projects

Same method, different behavior depending on the class. Sounds simple, kind of changes everything once your codebase grows.

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

You loop through everything and just call `area()`. You don't write an if-else checking what type of shape it is. It just handles itself. The real value shows up when you add a new shape later — you don't touch any existing code, you just add the new class and it works.

---

# Encapsulation — other parts of your code shouldn't be reaching into your classes

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

`private` means nothing outside this class touches `balance` directly. You go through `deposit()`, which actually validates the amount. This feels like a small thing until you're debugging why some random value got mutated three files away and you have no idea what touched it.

---

# Abstraction — you don't explain the engine, you just hand over the steering wheel

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

Whoever calls `notify()` doesn't know or care how it gets delivered. Email, SMS, push notification — doesn't matter. That detail lives inside the subclass and nowhere else. In a team where different people own different services, this is genuinely how you avoid stepping on each other constantly.

---

None of this is magic. It's just structure — ways of organizing code so that when something breaks, you know where to look, and when something needs to change, you're not editing fifteen files to do it.
