import test from 'ava';

import Coupon from './coupon';
import Product from './product';
import ShoppingCart from './shopping-cart';

let cart;

test.beforeEach((t) => {
	cart = new ShoppingCart();
});

test.afterEach((t) => {
	cart = null;
});

test('ShoppingCart.constructor', (t) => {
	t.true(Array.isArray(cart.products));
});

test('ShoppingCart.addCoupon', (t) => {
	t.throws(() => cart.addCoupon(123));

	cart.addCoupon(new Coupon('foo', 0.5));
	cart.addCoupon(new Coupon('foo', 0.25));

	t.is(cart.coupons.length, 2);
});

test('ShoppingCart.addProduct', (t) => {
	t.throws(() => cart.addProduct(123));

	cart.addProduct(new Product('foo', 123));
	cart.addProduct(new Product('foo', 123));

	t.is(cart.products.length, 2);
});

test('ShoppingCart.reset', (t) => {
	cart.addProduct(new Product('foo', 10));
	cart.addProduct(new Product('bar', 20));
	cart.addCoupon(new Coupon('abc', 0.5));
	cart.addCoupon(new Coupon('abc', 0.5));
	cart.reset();

	t.is(cart.coupons.length, 0);
	t.is(cart.products.length, 0);
});

test('ShoppingCart.totalPrice', (t) => {
	cart.addProduct(new Product('foo', 2));
	cart.addProduct(new Product('bar', 3));

	t.is(cart.getTotalPrice(), 5 + ShoppingCart.SHIPPING_COSTS);
});

test('ShoppingCart.totalPrice without products', (t) => {
	t.is(cart.getTotalPrice(), 0);
});

test('ShoppingCart.totalPrice with coupons', (t) => {
	cart.addProduct(new Product('foo', 10));
	cart.addProduct(new Product('bar', 20));
	cart.addCoupon(new Coupon('abc', 0.1));
	cart.addCoupon(new Coupon('abc', 0.1));

	t.is(cart.getTotalPrice(), 24.3);
});

test('ShoppingCart.totalPrice with coupons without shipping', (t) => {
	cart.addProduct(new Product('foo', 10));
	cart.addProduct(new Product('bar', 20));
	cart.addCoupon(new Coupon('abc', 0.5));
	cart.addCoupon(new Coupon('abc', 0.5));

	t.is(cart.getTotalPrice(), 7.5);
});
