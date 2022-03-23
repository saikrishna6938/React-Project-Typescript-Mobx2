import { action, computed, makeObservable, observable } from "mobx";
import { Product } from "../model";

export class WishStoreContext {
  wishStore: Product[] = [];
  constructor() {
    makeObservable(this, {
      wishStore: observable,
      add_to_wish: action,
      remove_from_wish: action,
      is_wish_item: action,
      wish_count: computed
    });
  }
  add_to_wish(item: Product) {
    this.wishStore.push(item);
  }
  remove_from_wish(itemID: string) {
    let items = this.wishStore.filter((res) => res.productID !== itemID);
    this.wishStore = items;
  }
  get wish_count() {
    return this.wishStore.length;
  }
  is_wish_item(itemID: string) {
    return this.wishStore.some((res) => res.productID === itemID);
  }
}
