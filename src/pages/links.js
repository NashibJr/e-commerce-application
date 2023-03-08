import * as React from "react";
import { Link } from "react-router-dom";
import carticon from "../images/cart-icon.jpg";

const Links = () => {
  const [productName, setProductName] = React.useState("");
  const ref = React.useRef();
  const handleDisplay = {
    showCategories: () => {
      ref.current.style.display = "block";
    },
    hideCategories: () => {
      ref.current.style.display = "none";
    },
  };
  return (
    <div className="links-content">
      <h1>
        <span>xxx</span> shoppers
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
              marginRight: "110px",
            }}
          >
            Home
          </Link>
        </li>
        <li
          style={{ position: "fixed", marginRight: "260px" }}
          onMouseOver={handleDisplay.showCategories}
          onMouseLeave={handleDisplay.hideCategories}
        >
          categories
          <span>
            <ul className="dropdown-content" ref={ref}>
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
            about
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
