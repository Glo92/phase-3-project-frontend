import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Lists from '../components/Lists';
import SearchShoe from '../components/SearchShoe';

import Cart from '../components/Cart';

function ShoeList() {
  const [shoes, setShoes] = useState([]);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState('')
  const [cart, setCart] = useState([]);

  console.log(searchInput)

  useEffect(() => {
    fetch("http://localhost:8000/shoe", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data); 
      if (Array.isArray(data)) {
        
         setShoes(data);
      } else {
        setError("Expected an array of shoes");
      }
    })
   
    
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredShoes =shoes.filter((shoe) => shoe.name.toLowerCase().includes(searchInput.toLowerCase()))

  console.log(shoes);
    // Function to add item to cart
    const addToCart = (shoe) => {
      const existingItem = cart.find(item => item.id === shoe.id);
      if (existingItem) {
        // Increase quantity if item already exists in cart
        setCart(cart.map(item => item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item));
      } else {
        // Add new item to cart with quantity 1
        setCart([...cart, { ...shoe, quantity: 1 }]);
      }
    };
  
    // Function to remove item from cart
    const removeFromCart = (shoeId) => {
      const updatedCart = cart.filter(item => item.id !== shoeId);
      setCart(updatedCart);
    };
  

  return (
    <div>
      <div>
        <h1 className='font-bold text-3xl text-white flex justify-center px-6 pt-5 font-style: italic'>
          WELCOME TO OUR ONLINE SHOP
        </h1>
        <h1 className='font-bold text-2xl text-white flex justify-center px-4 pt-1 font-style: italic'>
          Your struggle to find stylish and comfortable footwear is over
        </h1>
      </div>
      <NavBar />
      
      <SearchShoe setSearchInput={setSearchInput} searchInput={searchInput}/>
      <Lists shoes={filteredShoes} addToCart={addToCart}/>
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default ShoeList
