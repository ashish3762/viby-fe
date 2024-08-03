import React from "react";

export default function ProductCard(props) {
  return (
    <div key={props.product.id}>
      <img
        src={props.product.imageurl}
        alt={props.product.name}
        className="image-card"
      />
      <div className="text-2xl my-2">{props.product.name.toUpperCase()}</div>
      <div className="text-xl">${props.product.price}</div>
    </div>
  );
}
