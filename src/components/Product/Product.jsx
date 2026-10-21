import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
import { productUrl } from "../../Api/endPoints";

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products`)
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <div style={{ textAlign: "center", padding: "40px" }}>
          Loading products...
        </div>
      ) : (
        <section className={classes.products__container}>
          {products?.map((singleProduct) => {
            return (
              <ProductCard
                renderAdd={true}
                product={singleProduct}
                key={singleProduct.id}
              />
            );
          })}
        </section>
      )}
    </>
  );
}

export default Product;
