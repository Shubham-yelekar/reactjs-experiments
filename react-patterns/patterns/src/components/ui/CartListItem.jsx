import React from "react";

const CartListItem = ({ data }) => {
  console.log(data);

  return (
    <div className="border border-neutral-400 p-1 ">
      <h1 className="font-bold">{data.name}</h1>
      <h1>{data.price}</h1>
      <p>{data.cartQuantity}</p>
    </div>
  );
};

export default CartListItem;
