import test from 'ava';
// import sinon from 'sinon';

import Coupon from './models/coupon';
import Product from './models/product';
import ShoppingCart from './shopping-cart';

test('ShoppingCart.constructor', (t) => {
	const cart = new ShoppingCart();

	t.true(Array.isArray(cart.products));
});

test('ShoppingCart.addCoupon', (t) => {
	const cart = new ShoppingCart();

	t.throws(() => cart.addCoupon(123));

	cart.addCoupon(new Coupon('foo', 0.5));
	cart.addCoupon(new Coupon('foo', 0.25));

	t.is(cart.coupons.length, 2);
});

test('ShoppingCart.addProduct', (t) => {
	const cart = new ShoppingCart();

	t.throws(() => cart.addProduct(123));

	cart.addProduct(new Product('foo', 123));
	cart.addProduct(new Product('foo', 123));

	t.is(cart.products.length, 2);
});

test('ShoppingCart.getTotalPrice', (t) => {
	const cart = new ShoppingCart();

	cart.addProduct(new Product('foo', 2));
	cart.addProduct(new Product('bar', 3));

	t.is(cart.getTotalPrice(), 5 + ShoppingCart.SHIPPING_COSTS);
});

test('ShoppingCart.getTotalPrice with coupons', (t) => {
	const cart = new ShoppingCart();

	cart.addProduct(new Product('foo', 10));
	cart.addProduct(new Product('bar', 20));
	cart.addCoupon(new Coupon('abc', 0.1));
	cart.addCoupon(new Coupon('abc', 0.1));

	t.is(cart.getTotalPrice(), 24.3);
});
