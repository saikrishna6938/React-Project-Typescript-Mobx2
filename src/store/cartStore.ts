import { action, computed, makeObservable, observable } from "mobx";
import { Product } from "../model";

export class CartStoreContext {
  cartStoreArray: Product[] = [];

  constructor() {
    makeObservable(this, {
      cartStoreArray: observable,
      add_to_cart: action,
      remove_from_cart: action,
      is_cart_item: action,
      cart_count: computed
    });
  }
  add_to_cart(item: Product) {
    this.cartStoreArray.push(item);
  }
  remove_from_cart(itemID: string) {
    let items = this.cartStoreArray.filter((res) => res.productID !== itemID);
    this.cartStoreArray = items;
  }
  get cart_count() {
    return this.cartStoreArray.length;
  }

  is_cart_item(itemID: string) {
    return this.cartStoreArray.some((res) => res.productID === itemID);
  }
}
