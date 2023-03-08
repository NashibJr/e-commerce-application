import * as React from "react";

const Suspense = ({ loading, fallback, children }) => {
  return loading ? fallback : children;
};

export default Suspense;
