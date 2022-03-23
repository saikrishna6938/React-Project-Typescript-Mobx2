import { useEffect, useState } from "react";
import Loader from "../components/loader";
import ProductList from "../components/productList";
import { Product } from "../model";

function AllProducts() {
  const [isloading, setisloading] = useState(true);
  const [isdata, setisdata] = useState<Product[]>();

  useEffect(() => {
    const productar: Product[] = [];
    fetch(
      "https://react-app-bf150-default-rtdb.firebaseio.com/products.json"
    ).then((response) => {
      response.json().then((data) => {
        for (let key in data) {
          let prod: Product = {
            productID: key,
            ...data[key]
          };
          productar.push(prod);
        }
        setisdata(productar);
        setisloading(false);
      });
    });
  }, []);
  if (isloading) {
    return <Loader></Loader>;
  }
  return (
    <div className="col-md mx-5">
      <ProductList product_ar={isdata}></ProductList>
    </div>
  );
}

export default AllProducts;
