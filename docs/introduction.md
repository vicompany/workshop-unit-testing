# Introduction

## Why write tests?

- Assurance that the code works
- Useful for fixing bugs
- Fast feedback when programming
- It can serve as API documentation (when there's none)

[Watch “Why unit testing?” by Mattias Petter Johansson (a.k.a. "Fun Fun Function")](https://www.youtube.com/watch?v=Eu35xM76kKY)

## What not to test?

### 1. Whether a properties or methods exist (or not)

There's little value in testing whether a property or method exists. They should be used in your tests. If they doesn't exist, they throw an error anyway.

### 2. Stay away from the DOM and APIs

Unit tests focus on testing simple, isolated units. If a component touches the DOM or fetches a resource, we quickly enter the realm of integration tests. These tests are significantly more complex and it's hard to limit their scope.

### 3. Libraries or other third party code

Properly built libraries should already be tested ;)

---

[Go back to README](/README.md)
