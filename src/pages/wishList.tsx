import { observer } from "mobx-react";
import ProductList from "../components/productList";
import { useWishStore } from "../useStores";

function WishList() {
  const { wishStore } = useWishStore();
  let content;
  if (wishStore.wishStore.length > 0) {
    content = <ProductList product_ar={wishStore.wishStore}></ProductList>;
  } else {
    content = <h3>No Product Added to Wishlist.</h3>;
  }

  return <div>{content}</div>;
}

export default observer(WishList);
