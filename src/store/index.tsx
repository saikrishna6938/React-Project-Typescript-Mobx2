import { createContext } from "react";
import { CartStoreContext } from "./cartStore";
import { WishStoreContext } from "./wishStore";

export const cartStoreContext = createContext({
  cartStore: new CartStoreContext()
});

export const wishStoreContext = createContext({
  wishStore: new WishStoreContext()
});
