const Suspence = ({ loading, fallback, children }) => {
  return loading === "pending" ? fallback : children;
};

export default Suspence;
