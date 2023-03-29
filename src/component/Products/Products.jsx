import React from "react";

const Products = ({ product, handleCart }) => {
  return (
    <div className="table">
      <div className="product card w-96 bg-base-100 shadow-xl relative table-cell">
        <figure className="px-10 pt-10">
          <img src={product.img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center ">
          <h2 className="card-title">{product.name}</h2>
          <p className="font-bold">Price: ${product.price}</p>
          <p>Manufracturer: {product.seller}</p>
          <p>Rating: {product.ratings}</p>
          <div className="card-actions">
            <button
              onClick={() => handleCart(product)}
              className="btn btn-error text-white "
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
