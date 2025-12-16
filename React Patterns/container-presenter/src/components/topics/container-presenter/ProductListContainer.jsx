import React, { useEffect, useState } from "react";
import Card from "../../ui/Card";
import Button from "../../ui/Button";
import axios from "axios";
import ProductListPresenter from "./ProductListPresenter";
import Summary from "./Summary";

const ProductListContainer = () => {
  const [productList, setProductList] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}\products`
      );

      setProductList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  function addItemToCart(id) {
    const product = productList.find((item) => item.id === id);
    setCart((prev) =>
      prev.some((item) => item.id === id) ? prev : [...prev, product]
    );
  }
  function clearCart() {
    console.log("clear");
  }
  return (
    <div className="flex gap-2">
      <ProductListPresenter
        products={productList}
        addItemToCart={addItemToCart}
        clearCart={clearCart}
      />
      <Summary cartList={cart} />
    </div>
  );
};

export default ProductListContainer;
