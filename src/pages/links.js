import * as React from "react";
import { Link } from "react-router-dom";
import carticon from "../images/cart-icon.jpg";

const Links = () => {
  const [productName, setProductName] = React.useState("");
  return (
    <div className="links-content">
      <h1>
        <span>xxx</span> shopers
      </h1>
      <ul>
        <li>
          <Link
            to="/"
            style={{
              color: "black",
              textTransform: "lowercase",
              textDecoration: "none",
              fontWeight: "bold",
              dislay: "block",
              margin: "10px",
            }}
          >
            Home
          </Link>
        </li>
        <li>
          Categories
          <span>
            <ul className="dropdown-content">
              <li>
                <Link
                  to="/electronics"
                  style={{
                    color: "black",
                    textTransform: "lowercase",
                    textDecoration: "none",
                    fontWeight: "bold",
                    dislay: "block",
                    margin: "10px",
                  }}
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  to="/electronics"
                  style={{
                    color: "black",
                    textTransform: "lowercase",
                    textDecoration: "none",
                    fontWeight: "bold",
                    dislay: "block",
                    margin: "10px",
                  }}
                >
                  Women's clotings
                </Link>
              </li>
              <li>
                <Link
                  to="/electronics"
                  style={{
                    color: "black",
                    textTransform: "lowercase",
                    textDecoration: "none",
                    fontWeight: "bold",
                    dislay: "block",
                    margin: "10px",
                  }}
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  to="/electronics"
                  style={{
                    color: "black",
                    textTransform: "lowercase",
                    textDecoration: "none",
                    fontWeight: "bold",
                    dislay: "block",
                    margin: "10px",
                  }}
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  to="/electronics"
                  style={{
                    color: "black",
                    textTransform: "lowercase",
                    textDecoration: "none",
                    fontWeight: "bold",
                    dislay: "block",
                    margin: "10px",
                  }}
                >
                  Electronics
                </Link>
              </li>
            </ul>
          </span>
        </li>
        <li>
          <input
            type="text"
            placeholder="Enter product name"
            name="productName"
            value={productName}
            onChange={(event) => setProductName(event.target.value)}
          />
        </li>
        <li>
          <Link
            to="/about"
            style={{
              color: "black",
              textDecoration: "none",
              fontWeight: "bold",
              dislay: "block",
              margin: "10px",
              marginLeft: "20px",
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link>
            <img src={carticon} width="25px" height="25px" alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Links;
