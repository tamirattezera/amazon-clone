import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../components/Product/ProductCard"; 

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [categoryName]);

  return (
    <div>
      <Header />
      <section>
        <h1 style={{ padding: "20px" }}>Results</h1>
        <p style={{ padding: "0 20px", textTransform: "capitalize" }}>
          Category / {categoryName}
        </p>
        <hr style={{ borderColor: "#eee", margin: "10px 20px" }} />

        {isLoading ? (
          <div style={{ textAlign: "center", padding: "40px" }}>Loading...</div>
        ) : (
          <div className={classes.products__container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderDesc={true}
                renderAdd={true}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Results;
