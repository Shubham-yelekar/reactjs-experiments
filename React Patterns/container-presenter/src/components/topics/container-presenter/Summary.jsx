import React from "react";
import CartListItem from "../../ui/CartListItem";

const Summary = ({ cartList }) => {
  console.log(cartList);

  return (
    <div className="p-4 w-[50vw]">
      <h1 className="text-2xl">Cart</h1>
      <div>
        {cartList.map((item, index) => (
          <CartListItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Summary;
