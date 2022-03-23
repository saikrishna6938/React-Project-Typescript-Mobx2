import { observer } from "mobx-react";
import * as React from "react";
import { Product } from "../model";
import Card from "../ui/card";
import { useCartStore, useWishStore } from "../useStores";
function ProductItem(props: Product) {
  const { cartStore } = useCartStore();
  const { wishStore } = useWishStore();
  const [is_cart, setis_cart] = React.useState(
    cartStore.is_cart_item(props.productID ?? "")
  );
  const [is_wish, setis_wish] = React.useState(
    wishStore.is_wish_item(props.productID ?? "")
  );

  function CartSelectionHandler() {
    if (is_cart) {
      cartStore.remove_from_cart(props.productID ?? "");
      setis_cart(false);
    } else {
      cartStore.add_to_cart(props);
      setis_cart(true);
    }
  }
  function WishSelectionHandler() {
    if (is_wish) {
      wishStore.remove_from_wish(props.productID ?? "");
      setis_wish(false);
    } else {
      wishStore.add_to_wish(props);
      setis_wish(true);
    }
  }
  return (
    <div>
      <Card>
        <img
          src={props.productImage}
          className="card-img"
          alt={props.productTitle}
        />
        <div className="card-body">
          <h5 className="card-title">{props.productTitle}</h5>
          <p className="card-text">{props.productDescription}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: {props.productPrice}</li>
          <li className="list-group-item">
            Quantity Available{props.productQuantity}
          </li>
          <li className="list-group-item">Delivery within Four Days</li>
        </ul>
        <div className="card-body">
          <span
            onClick={CartSelectionHandler}
            className="badge bg-primary mx-2 my-2"
          >
            {is_cart ? "Remove from Cart" : "Add to Cart"}
          </span>
          <span
            onClick={WishSelectionHandler}
            className="badge bg-secondary mx-2 my-2"
          >
            {is_wish ? "Remove from wishlist" : "Add to wishlist"}
          </span>
        </div>
      </Card>
    </div>
  );
}
export default observer(ProductItem);
