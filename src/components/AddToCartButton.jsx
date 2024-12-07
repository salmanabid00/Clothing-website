import React from 'react';
import { useCart } from '../contexts/CartContext';

const AddToCartButton = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart({ ...product, quantity: 1 })}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;









