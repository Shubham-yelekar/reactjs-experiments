import React, { useEffect, useState } from "react";
import Card from "../../ui/Card";
import Button from "../../ui/Button";
import axios from "axios";
import ProductListPresenter from "./ProductListPresenter";
import Summary from "./Summary";

const ProductListContainer = () => {
  const [productList, setProductList] = useState([]);
  const [cart, setCart] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/products`
      );

      setProductList(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  function addItemToCart(id) {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((i) => i.id === id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === id
            ? { ...item, cartQuantity: item.cartQuantity + 1 }
            : item
        );
      }
      const newItem = productList.find((i) => i.id === id);
      if (!newItem) return prevCart;
      return [...prevCart, { ...newItem, cartQuantity: 1 }];
    });
  }
  function clearCart() {
    setCart(() => []);
  }
  return (
    <div className="flex gap-2">
      <ProductListPresenter
        products={productList}
        addItemToCart={addItemToCart}
        clearCart={clearCart}
      />
      <Summary cartList={cart} clearCart={clearCart} />
    </div>
  );
};

export default ProductListContainer;
