import { observer } from "mobx-react";
import { ProductData } from "../model";

import ProductItem from "./productItem";

function ProductList(props: ProductData) {
  return (
    <div className="col-4 m-auto">
      {props.product_ar.map((res, index) => {
        return <ProductItem key={index} {...res}></ProductItem>;
      })}
    </div>
  );
}
export default observer(ProductList);
