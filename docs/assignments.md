# Assignments

This document contains all assignments. Before writing code, we have to run the testing tool.

Run `npm start` to start the watcher.

Tips and links:

- Always keep an eye out for errors in the console! 👀
- [AVA Documentation: API](https://github.com/avajs/ava#api)
- [AVA Documentation: Assertions](https://github.com/avajs/ava#assertions)
- [Sinon.JS](http://sinonjs.org/)

## Write unit tests for the Coupon and Product models

Because the Coupon and Product models do not have methods, testing the constructor and properties will suffice.

1. Write unit tests in `src/models/coupon.test.js`
1. Write unit tests in `src/models/product.test.js`

<details>
  <summary>Tips</summary>

  <p>Write tests that checks whether:</p>

  <ul>
    <li>The constructors function properly.</li>
    <li>The instance properties matches what was passed to the constructor.</li>
  </ul>
</details>

## Complete the unit tests for ShoppingCart

When testing methods, it is important to test the effect of various arguments and the method’s return value.

1. Write unit tests for `ShoppingCart.getProductSum()`. Note that the shopping cart needs products for this method to work.
2. Write unit tests for `ShoppingCart.getDiscount(price)`. Note that the shopping cart needs coupons for this method to work.

## Clean up repetitive code

The following code is repeated for every test in `src/shopping-cart.test.js`:

```js
const cart = new ShoppingCart();
```

Find whether this can be repeated in a DRY manner.

<details>
  <summary>Tips</summary>

  <ul>
    <li>Look into setup and teardown.</li>
    <li><a href="https://github.com/avajs/ava#before--after-hooks">AVA Documentation: Before & after hooks</a>.</li>
  </ul>
</details>

## As a user, I want to reset my cart

Sometimes a method changes the state of it’s object. Make sure that these changes reflect in your tests.

1. Write a test to see if the cart was reset
2. Write a reset method

<details>
  <summary>Tips</summary>

  <ul>
    <li>The trick here is to write the test first, so you can think about what the method should do before writing it. By doing so, passing all tests indicates that the method is complete!</li>
    <li>Make sure products and coupons are removed from the cart.</li>
  </ul>
</details>

## Test `ShoppingCart.getTotalPrice` internals

1. The method ShoppingCart.getTotalPrice executes several other methods. Test whether these are called.

<details>
  <summary>Tips</summary>

  <ul>
    <li>A spy allows you to record whether a function was called.</li>
    <li><a href="http://sinonjs.org/releases/v4.4.6/spies/">Sinon.JS Documentation: Spies</a>.</li>
  </ul>
</details>

## Bug: After emptying the cart, I still have to pay shipping costs

When dealing with bugs, it can be useful to write tests first so while you’re changing the code, the test script verifies your changes.

1. Write a test for this use-case
2. Fix the bug

## Bug: I have to pay shipping costs after discount

A user reported that they had to pay more after they inserted a coupon code. The price was 22 and the coupon code resulted in a 15% discount. The total price was now 23.70.

The shipping costs should be calculated before applying the discount, resulting in a total price of 18.70.

1. Write a test for this use-case
2. Fix the bug
