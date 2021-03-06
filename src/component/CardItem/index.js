import React from "react";
import PropTypes from "prop-types";

CardItem.propTypes = {
  cart: PropTypes.array,
};
CardItem.defaultProps = {
  cart: [],
};
function CardItem(props) {
  const { cart } = props;
  return (
    <div className="flex flex-wrap -m-4">
      {cart.map(({_id,name,price,image}) => (
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={_id}>
          <a className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="w-full h-full block"
              src={image}
            />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              {name}
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              
            </h2>
            <p className="mt-1">{price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardItem;
