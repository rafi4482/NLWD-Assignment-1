# Understanding `any` vs `unknown` in TypeScript

## Introduction

One of the biggest reasons people use TypeScript is its type safety — it catches mistakes before they ever reach production. But TypeScript also gives you two escape hatches for when you genuinely don't know what type a value will be: `any` and `unknown`. They look similar at first glance, but they behave very differently. Choosing the right one can be the difference between a codebase that protects you and one that quietly lets bugs slip through. In this blog, we'll look at both types, see how they behave, and understand why `unknown` is almost always the better choice.

---

## `any` — Turning Off the Type Checker

When you use `any`, you are basically telling TypeScript: *don't worry about it*. And TypeScript listens — which is exactly the problem.

```ts
let data: any = "hello"
data.toUpperCase()
data.randomMethod()
```

`randomMethod` doesn't exist anywhere, and TypeScript knows it. But `any` mutes the error completely. No warning, no red squiggle, nothing. Then three weeks later something breaks in production and you have no idea why. Once `any` enters your code, TypeScript stops being useful around it — and that defeats the entire reason you adopted TypeScript in the first place.

---

## `unknown` — A Safer Way to Say "I Don't Know Yet"

`unknown` represents the same idea — "I don't know what this is" — but it forces you to prove what the type is before you use it.

```ts
let data: unknown = "hello"
data.toUpperCase() // error
```

TypeScript stops you here, and that's a good thing. To actually use the value, you have to check its type first:

```ts
if (typeof data === "string") {
  console.log(data.toUpperCase())
}
```

Now it works, and it works *safely*. This is exactly the habit you want when pulling data from an API, parsing JSON, or handling user input — you don't actually know what's coming back, and pretending you do is how bugs happen.

---

## Type Narrowing — TypeScript Following Your Logic

Narrowing is what makes `unknown` (and union types) practical to work with. When you write a `typeof` check, TypeScript watches it and refines the type inside that block automatically.

```ts
function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase())
  } else {
    console.log(value.toFixed(2))
  }
}
```

Before the check, `value` could be a string or a number. Inside the `if` branch, TypeScript knows it's definitely a string. Inside the `else`, it knows it's definitely a number. You didn't have to cast anything — TypeScript just followed your logic.

---

## Conclusion

The difference between `any` and `unknown` may look small, but the impact on a real codebase is huge. `any` silently disables the type checker and lets bugs slip through, while `unknown` keeps you safe by forcing you to verify the type before using the value. Combined with narrowing, `unknown` lets you handle uncertain data without giving up the safety TypeScript was designed to provide. The rule of thumb is simple: avoid `any` whenever you can, reach for `unknown` instead, and let TypeScript do the work it's good at.
