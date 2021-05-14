import React, { useEffect, useState } from "react";
import CardItem from "../CardItem";
import Pagination from "../Pagination";
const Card = () => {
  const [product, setProduct] = useState();
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
  });
  const [filter, setFilter] = useState({
    page: 1,
    limit: 10,
  });
  useEffect(() => {
    async function API_heaphone() {
      const url_API = `https://headphoneapi.herokuapp.com/api/products?page=1&limit=4`;
      const response = await fetch(url_API);
      const result = await response.json();
      const data = result;
      const pagination = result;
      setProduct(data);
      setPagination(pagination)
    }
    API_heaphone();
  }, [filter]);
  const handelChangePage = (newPages) => {
    setFilter({
      ...filter,
      page  : newPages
    })
    console.log(newPages);
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <CardItem cart={product}></CardItem>
      </div>
      <Pagination
        pagination={pagination}
        onPageChange={handelChangePage}
      ></Pagination>
    </section>
  );
};

export default Card;
