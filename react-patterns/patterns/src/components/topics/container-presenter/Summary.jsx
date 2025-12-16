import React from "react";
import CartListItem from "../../ui/CartListItem";
import Button from "../../ui/Button";

const Summary = ({ cartList, clearCart }) => {
  console.log(cartList);

  return (
    <div className="p-4 w-[50vw]">
      <h1 className="text-2xl">Cart</h1>
      <Button label={"Clear Cart"} variant={"underline"} onAction={clearCart} />
      <div>
        {cartList.map((item, index) => (
          <CartListItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Summary;
