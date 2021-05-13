import React, { useEffect, useState } from "react";
import CardItem from "../CardItem";
const Card = () => {
  const [product, setProduct] = useState();
  useEffect(() => {
    async function API_heaphone() {
      const url_API = "https://headphoneapi.herokuapp.com/api/products?page=1&limit=8";
      const response = await fetch(url_API);
      const result = await response.json();
      console.log({ result });
      const data = result;
      setProduct(data);
    }
    API_heaphone();
  }, []);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <CardItem cart={product}></CardItem>
      </div>
    </section>
  );
};

export default Card;
