import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Products from "../Products/Products";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart , setCart] = useState([])
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleCart = (product) =>{
    const newCart = [...cart, product]
    setCart(newCart)
  }

  return (
    <div className="grid grid-cols-6 gap-4 mt-12 ">
      <div className="product-container col-span-5 relative">
        <div className="product-info grid grid-cols-3 gap-4 ms-5">
          {products.map((product) => (
            <Products key={product.id} product={product} handleCart={handleCart}></Products>
          ))}
        </div>
      </div>
      <div className="order-container bg-orange-100 p-5 me-3">
        <div className="order-info sticky top-0 ">
          <h2 className="text-center">Order Summary</h2>
          <p className="mt-4">Selected Items: {cart.length} </p>
          <p className="mt-2">Total Price: ${}</p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
