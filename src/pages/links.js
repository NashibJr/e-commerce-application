import * as React from "react";
import { Link } from "react-router-dom";
import carticon from "../images/cart-icon.jpg";

const Links = () => {
  return (
    <div>
      <h2>xxx shopers</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          Categories
          <span>
            <ul>
              <li>
                <Link to="/electronics">Electronics</Link>
              </li>
              <li>
                <Link to="/electronics">Women's clotings</Link>
              </li>
              <li>
                <Link to="/electronics">Electronics</Link>
              </li>
              <li>
                <Link to="/electronics">Electronics</Link>
              </li>
              <li>
                <Link to="/electronics">Electronics</Link>
              </li>
            </ul>
          </span>
        </li>
        <li>
          <input type="text" placeholder="Enter product name" name="product" />
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <img src={carticon} width="50px" height="50px" alt="" />
        </li>
      </ul>
    </div>
  );
};

export default Links;
