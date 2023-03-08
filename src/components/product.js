import * as React from "react";

const Product = ({ product }) => {
  return (
    <div className="product-content">
      <img src={product.thumbnail} width="100%" height="120px" alt="" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button type="button" name="button">
        Add to cart
      </button>
    </div>
  );
};

export default Product;
