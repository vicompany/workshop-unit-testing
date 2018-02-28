import Coupon from './models/coupon';
import Product from './models/product';

export default class ShoppingCart {
	constructor() {
		this.coupons = [];
		this.products = [];
	}

	addCoupon(coupon) {
		if (!(coupon instanceof Coupon)) {
			throw new Error(`${coupon} is not a Coupon`);
		}

		this.coupons.push(coupon);
	}

	addProduct(product) {
		if (!(product instanceof Product)) {
			throw new Error(`${product} is not a Product`);
		}

		this.products.push(product);
	}

	getProductSum() {
		return this.products.reduce((sum, product) => sum + product.price, 0);
	}

	getDiscount(price) {
		return this.coupons
			.reduce((sum, coupon) => sum - (sum * coupon.discount), price);
	}

	getTotalPrice() {
		if (this.products.length === 0) {
			return 0;
		}

		const productSum = this.getProductSum();

		if (productSum >= ShoppingCart.SHIPPING_MAX_PRICE) {
			return this.getDiscount(productSum);
		}

		return this.getDiscount(productSum + ShoppingCart.SHIPPING_COSTS);
	}

	reset() {
		this.coupons.length = 0;
		this.products.length = 0;
	}

	static get SHIPPING_COSTS() {
		return 5;
	}

	static get SHIPPING_MAX_PRICE() {
		return 20;
	}
}
