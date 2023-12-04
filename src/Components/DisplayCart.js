import React, { useState } from 'react';
import Cart from './Cart'; // Import Cart 
import 'bootstrap/dist/css/bootstrap.css';


const DisplayCart = () => {
  const [cart, setCart] = useState(new Cart());
  const [items] = useState([
    //  Products
    { id: 1, name: 'Apple', price: 0.99 },
    { id: 2, name: 'Bread', price: 2.50 },
    { id: 3, name: 'Bagel', price: 2 },
    { id: 4, name: 'Banana', price: 3 },
    
  ]);

  //    Add to cart
  const addToCart = (item) => {
    const newCart = new Cart();
    newCart.items = [...cart.getItems()];
    newCart.addItem({ ...item });
    setCart(newCart);
  };

  //    Remove from cart
  const removeFromCart = (itemId) => {
    const newCart = new Cart();
    newCart.items = [...cart.getItems()];
    newCart.removeItem(itemId);
    setCart(newCart);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        <h2>Products</h2>
        {items.map(item => (
          <div key={item.id}>
            {item.name} - €{item.price}
            {/* Initial Add to cart Button */}
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div>
        <h2>Cart</h2>
        {/* Accessing map of items*/}
        {cart.getItems().map(item => (
          <div key={item.id}>
            {/* Display Item Name, Price & Qty */}
            {item.name} - €{item.price} x {item.quantity}
            {/* Buttons To Add more to / Remove From Cart */}
            <button className='marksBtn' onClick={() => addToCart(item)}>+</button>
            <button className='marksBtn' onClick={() => removeFromCart(item.id)}>-</button>
          </div>
        ))}
        {/* Display Total */}
        <p>Total: €{cart.calculateTotal().toFixed(2)}</p>
      </div>
    </div>
  );
};

export default DisplayCart;