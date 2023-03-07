import React, { useEffect } from "react";

function App() {
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=10&skip=90");
    console.log(data.json());
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Hello world!!!</h1>
    </div>
  );
}

export default App;
