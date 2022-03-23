import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import AllProducts from "./pages/allProducts";
import CartList from "./pages/cartList";
import NewProduct from "./pages/newProduct";
import WishList from "./pages/wishList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<AllProducts></AllProducts>} />
          <Route path="/mycartlist" element={<CartList></CartList>} />
          <Route path="/mywishlist" element={<WishList></WishList>} />
          <Route path="/create" element={<NewProduct></NewProduct>} />
        </Routes>
      </Layout>
    </div>
  );
}
