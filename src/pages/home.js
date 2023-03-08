import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/product";
import Suspence from "../components/suspense";
import { fetchProducts } from "../redux/products/productsSlice";

const Home = () => {
  const state = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const smartPhones = state?.products.filter(
    (product) => product.category === "smartphones"
  );
  const laptops = state?.products.filter(
    (product) => product.category === "laptops"
  );
  const fragrances = state?.products.filter(
    (product) => product.category === "fragrances"
  );
  return (
    <div className="home-content">
      <div className="home-left-content">
        <h1>Welcome to XXX shoppers</h1>
        <p>We are the leading online shoppers in Uganda</p>
        <p>We offer the best services on line</p>
        <p>We offer the newest products in Uganda</p>
        <p>We are the leading online shoppers in Uganda</p>
      </div>
      <div className="home-right-content">
        <Suspence loading={state.status} fallback={<p>Loading, please wait</p>}>
          <h2>Smartphones</h2>
          <div>
            {smartPhones?.map((phone) => (
              <Product product={phone} key={phone.id} />
            ))}
          </div>
          <h2>Laptops</h2>
          <div>
            {laptops?.map((laptop) => (
              <Product product={laptop} key={laptop.id} />
            ))}
          </div>
          <h2>Fragrances</h2>
          <div>
            {fragrances?.map((fragrance) => (
              <Product product={fragrance} key={fragrance.id} />
            ))}
          </div>
        </Suspence>
      </div>
    </div>
  );
};

export default Home;
