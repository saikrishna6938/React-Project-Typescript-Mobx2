import { observer } from "mobx-react";
import ProductList from "../components/productList";
import { useCartStore } from "../useStores";

function CartList() {
  const { cartStore } = useCartStore();
  let content;
  if (cartStore.cartStoreArray.length > 0) {
    content = <ProductList product_ar={cartStore.cartStoreArray}></ProductList>;
  } else {
    content = <h3>No Product Added to Cart.</h3>;
  }

  return <div>{content}</div>;
}

export default observer(CartList);
