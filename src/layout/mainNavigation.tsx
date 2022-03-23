import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { useCartStore, useWishStore } from "../useStores";

function MainNavigation() {
  const { cartStore } = useCartStore();
  const { wishStore } = useWishStore();

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand">Sai Krishna</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                All Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mycartlist">
                My Cart{" "}
                <span className="badge bg-primary">{cartStore.cart_count}</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mywishlist">
                My Wishlist{" "}
                <span className="badge bg-primary">{wishStore.wish_count}</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">
                Add Product
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default observer(MainNavigation);
