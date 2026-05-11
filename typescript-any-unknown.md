# `any` is just giving up

Seriously. You're telling TypeScript "don't worry about it" and TypeScript listens — which is the problem.

```ts
let data: any = "hello"
data.toUpperCase()
data.randomMethod()
```

`randomMethod` doesn't exist anywhere. TypeScript knows that. But `any` basically mutes it. No error, no warning, nothing. And then three weeks later something breaks in production and you have no idea why.

That's the hole. Once `any` is in, TypeScript stops being useful around it.

---

# `unknown` is the same thing but it actually respects you

You're still saying "I don't know what type this is." But instead of just letting you do whatever, it stops you until you figure it out.

```ts
let data: unknown = "hello"
data.toUpperCase() // error
```

Just add a check:

```ts
if (typeof data === "string") {
  console.log(data.toUpperCase())
}
```

Now it works. And honestly this is just good habit when you're pulling data from an API — you don't actually know what's coming back. Pretending you do is how bugs happen.

---

# Narrowing is just TypeScript watching what you do

You write a `typeof` check, TypeScript sees it, and inside that block it knows more than it did before. That's it.

```ts
function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase())
  }
}
```

Before the check — string or number, could be either. After — definitely a string. TypeScript just followed your logic. Nothing complicated about it, it's more of a habit you build than a concept you study.
