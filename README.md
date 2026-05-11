# NLWD Assignment 1

This repository contains my submission for NLWD Assignment 1. It includes solutions to seven TypeScript problems and two short blog posts on TypeScript and OOP concepts.

## Contents

- `solutions.ts` — Solutions to Problems 1–7.
- `typescript-any-unknown.md` — Blog: differences between `any` and `unknown` in TypeScript.
- `oop-four-pillars.md` — Blog: the four pillars of Object-Oriented Programming.

## Problems Solved

1. **filterEvenNumbers** — Returns only even numbers from an array.
2. **reverseString** — Reverses a given string.
3. **checkType** — Identifies whether the input is a `string` or `number`.
4. **getProperty** — Generic function to safely access an object property.
5. **toggleReadStatus** — Adds an `isRead: true` flag to a `Book` object.
6. **Person / Student** — Class inheritance with a `getDetails()` method.
7. **getIntersection** — Returns the intersection of two number arrays.

## Running the Code

Make sure [Node.js](https://nodejs.org/) and TypeScript are installed:

```bash
npm install -g typescript
```

Compile and run:

```bash
tsc solutions.ts
node solutions.js
```

Or run directly with `ts-node`:

```bash
npx ts-node solutions.ts
```

## Author

**Rafi** — NLWD Assignment 1 submission.
