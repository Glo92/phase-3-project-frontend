import React from 'react'

function Logo() {
  return (
    <div>
        <img 
        className='w-full px-10'
        src="https://backyardshoez.co.ke/wp-content/uploads/2024/04/boots-for-sale-nairobi-backyard-shoez-jpg.webp" 
        alt="shoe pic" />

        <div>
            <h1 className='font-bold text-4xl flex justify-center my-10 font-style: italic'>WELCOME TO OUR SHOE STORE</h1>
            <p className='font-style: italic font-bold text-lg text-align: center mb-10 px-12 ml-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Vel numquam, voluptas voluptatum inventore quis at id ipsum eos quasi accusantium itaque voluptates. Omnis, 
                corporis voluptatibus. Ullam unde ipsa corrupti ad.</p>
        </div>
    </div>
  )
}

export default Logo;