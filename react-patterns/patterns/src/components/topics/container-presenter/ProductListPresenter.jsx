import React, { useEffect, useState } from "react";
import Card from "../../ui/Card";
import Button from "../../ui/Button";

const ProductListPresenter = ({ products, addItemToCart }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  function handleLowtoHigh() {
    setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
  }
  function handleHightoLow() {
    setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
  }

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <div>
      Sorting by price
      <Button
        label="High to low"
        variant={"underline"}
        onAction={handleHightoLow}
      />
      <Button
        label="Low to high"
        variant={"underline"}
        onAction={handleLowtoHigh}
      />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 ">
        {filteredProducts.map((item) => (
          <Card key={item.id} className="">
            {item.id}
            <div>
              <img className="w-24 rounded-md" src={item.imageUrl} alt="" />
            </div>
            <div>
              <h1 className="text-xl">{item.name}</h1>
              <p className="text-md text-neutral-400"> {item.description}</p>
            </div>
            <div className="">
              <span className="text-neutral-100">₹{item.price}</span>
              {" / "}
              <span className="text-neutral-400 line-through">
                ₹{item.originalPrice}
              </span>
            </div>
            <Button
              label={"Add to the cart"}
              variant={"base"}
              onAction={() => addItemToCart(item.id)}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductListPresenter;
