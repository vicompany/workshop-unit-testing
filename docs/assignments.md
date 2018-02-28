# Assignments

## Getting started

1. Run `npm i`
2. Run `npm start` to start the test watcher 🚀

Pro tip: always keep an eye on the console! 👀

## Task: Write unit tests for the Coupon and Product models

Because the models do not have methods, testing the constructor and properties will suffice.

1. Write unit tests in `src/models/coupon.test.js`
1. Write unit tests in `src/models/product.test.js`

## Task: Complete the unit tests for ShoppingCart

When testing methods, it's important to test the effect of various arguments and the method return.

1. Write unit tests for `ShoppingCart.getProductSum()`. Note that the shopping cart needs products for this method to work.
2. Write unit tests for `ShoppingCart.getDiscount(price)`. Note that the shopping cart needs coupons for this method to work.

## Task: Clean up repetitive code

The following code is repeated for every tests:

```js
const cart = new ShoppingCart();
```

Find whether this can be repeated in a DRY manner.

## As a user, I want to reset my cart

Sometimes a method changes the state of it's object. Make sure that these changes reflect in your tests.

1. Write a test to see if the cart was reset
2. Write a reset method

## Task: Test `ShoppingCart.getTotalPrice` internals

1. The method ShoppingCart.getTotalPrice executes several other methods, make sure these are called using a spy (using [Sinon.JS](http://sinonjs.org/))

## Bug: After emptying the cart, I still have to pay shipping costs

When dealing with bugs, it can be useful to write tests first so while you're changing the code, the test script verifies your changes.

1. Write a test for this use-case
2. Fix the bug

## Bug: I have to pay shipping costs after discount

A user reported that they had to pay more after they inserted a coupon code. The price was 22 and the coupon code resulted in a 15% discount. The total price was now 23.70.

The shipping costs should be calculated before applying the discount, resulting in a total price of 18.70.

1. Write a test for this use-case
2. Fix the bug
