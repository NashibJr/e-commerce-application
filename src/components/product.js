import * as React from "react";

const Product = ({ product }) => {
  return (
    <div>
      <img src={product.thumbnail} width="60px" height="100px" alt="" />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <button type="button" name="button">
        Add to cart
      </button>
    </div>
  );
};

export default Product;
