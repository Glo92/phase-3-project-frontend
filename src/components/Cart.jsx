import React from 'react';

function Cart({ cart, removeFromCart }) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-white mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id} className="flex justify-between items-center border-b py-2">
              <div>
                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price per item: ${item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-600 font-bold">
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
