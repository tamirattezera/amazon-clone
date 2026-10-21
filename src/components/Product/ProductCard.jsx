import React from "react";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";

function ProductCard({ product, flex, renderDesc, renderAdd }) {
  const { image, title, id, rating, price, description } = product;

  return (
    <div
      className={`${classes.card__container} ${flex ? classes.product__flexed : ""}`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" className={classes.img__container} />
      </Link>
      <div>
        <Link to={`/products/${id}`}>
          <h3>{title}</h3>
        </Link>
        {renderDesc && (
          <div style={{ maxWidth: "750px" }}>
            {description?.slice(0, 90)}...
          </div>
        )}
        <div className={classes.rating}>
          {rating && (
            <span style={{ fontSize: "12px" }}>
              ⭐ {rating.rate} / 5 ({rating.count})
            </span>
          )}
        </div>
        <div className={classes.price}>
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>${price}</span>
        </div>

        {renderAdd && (
          <button className={classes.button} onClick={() => {}}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
