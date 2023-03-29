import React from "react";

const Cart = ({ cart }) => {

  let totalPrice = 0;

  let totalShipping = 0;

  for (const price of cart) {
    totalPrice = totalPrice + price.price;
    totalShipping = totalShipping + price.shipping;
  }

  const tax = totalPrice * 5 / 100;

  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="order-info sticky top-0 p-3 text-slate-100">
      <h2 className="text-center font-bold text-2xl">Order Summary</h2>
      <p className="mt-8 text-lg">Selected Items: {cart.length} </p>
      <p className="mt-2 text-lg">Total Price: ${totalPrice}</p>
      <p className="mt-2 text-lg">Total Shipping Charges: ${totalShipping}</p>
      <p className="mt-2 text-lg">Tax: ${tax.toFixed(2)}</p>
      <h6 className="mt-4 font-bold text-xl ">Grand Total: ${grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
