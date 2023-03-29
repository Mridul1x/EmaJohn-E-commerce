import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
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
    <div className="grid grid-cols-6 gap-4">
      <div className="product-container col-span-5 mt-10">
        <div className="product-info grid grid-cols-3 gap-4 ms-5 px-5">
          {products.map((product) => (
            <Products key={product.id} product={product} handleCart={handleCart}></Products>
          ))}
        </div>
      </div>
      <div className="order-container bg-cyan-600 p-5">
      <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
