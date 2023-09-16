"use client";

import ProductsExerpt from "./ProductsExerpt";
import { useGetProductsQuery } from "@/redux/features/products/productsApiSlice";

const ProductsList = () => {
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery("getProducts");

  let content;
  if (isLoading) {
    content = <p>"Loading..."</p>;
  } else if (isSuccess) {
    content = products.ids.map((productId) => (
      <ProductsExerpt key={productId} productId={productId} />
    ));
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
};
export default ProductsList;
