export interface PropsLayout {
  children: React.ReactNode;
}
export interface Product {
  productID?: string;
  productTitle: string;
  productDescription: string;
  productImage: string;
  productPrice: string;
  productQuantity: string;
  is_cart?: boolean;
  is_wish?: boolean;
}
export interface ProductData {
  product_ar: Product[];
}
