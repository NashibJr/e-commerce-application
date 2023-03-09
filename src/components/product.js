import * as React from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/cart/addCartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="product-content">
      <img src={product.thumbnail} width="100%" height="120px" alt="" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button
        type="button"
        name="button"
        onClick={() =>
          dispatch(
            addProductToCart({
              id: product.id,
              title: product.title,
              image: product.thumbnail,
              price: product.price,
            })
          )
        }
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
