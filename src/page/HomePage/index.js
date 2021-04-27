import React, { useState } from "react";
import Button from "../../component/button";
import Card from "../../component/CardGroup";
const HomePage = () => {
  const [count, setCount] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const show = () => {
    console.log(count.push("hihi"));
    console.log(count);
  };
  return (
    <div>
      <Card></Card>
      <Button event={show} name="Click me !!"></Button>
    </div>
  );
};

export default HomePage;
