import React from 'react'
import NavBar from '../components/NavBar';
import Lists from '../components/Lists';
import SearchShoe from '../components/SearchShoe';
import AddShoe from '../components/AddShoe';

function ShoeList() {
  return (
    <div>
        <div>
            <h1 className='font-bold text-3xl text-white flex justify-center px-6 pt-5 font-style: italic'>
                WELCOME TO OUR ONLINE SHOP
            </h1>
            <h1 className='font-bold text-2xl text-white flex justify-center px-4 pt-1 font-style: italic'>Your struggle to find stylish and comfortable footwear is over</h1>
        </div>
      <NavBar/>
      
      <AddShoe/>

      <SearchShoe/>

      <div className="grid grid-cols-4 gap-1 w-full">
      {new Array(12).fill(Math.random()).map((_,index) => (
        <Lists key={index}/>

      ))}

      </div>
      
    </div>
  )
}

export default ShoeList;