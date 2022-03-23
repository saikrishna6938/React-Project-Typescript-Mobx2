import { useContext } from "react";
import { cartStoreContext, wishStoreContext } from "./store";

export const useCartStore = () => useContext(cartStoreContext);

export const useWishStore = () => useContext(wishStoreContext);
