import React from "react";
import Card from "../../component/CardGroup";
import { Helmet } from 'react-helmet'
const title = "Trang chủ"
const HomePage = () => {
  return (
    <>
    <Helmet>
      <title>
        {title}
      </title>
    </Helmet>
      <Card></Card>
    </>
  );
};

export default HomePage;
