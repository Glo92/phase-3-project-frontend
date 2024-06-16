import React from 'react'

function Footer() {
  return (
    <div className='bg-pink-300 '>
      
        <h1 className='flex justify-center font-bold text-3xl pt-8'>INCASE OF ANY INQUIRIES:</h1>

      <div className='flex items-start pl-16 pr-5'>

        <div className=' pl-5 pr-8 pt-16'>
          <h1 className='font-bold text-2xl flex justify-start mt-0'>Operating Hours</h1>
          <h2 className='pt-4 text-lg'>Monday - Sunday</h2>
          <h2 className='text-lg'>7:00AM - 10:00PM</h2>
        </div>

        <div className='pl-5 pt-16'>
        <h1 className='font-bold text-2xl pr-8'>Contact us:</h1>
        <h2 className='pt-4 text-lg'>0712345678 | 0798765432</h2>
        <h2 className=' text-lg'>foootwear@gmail.com</h2>
        </div>

        <div className=' px-5'>
          <div>
          <h1 className='font-bold text-2xl pr-8 pt-16 flex justify-center'>Collections</h1>
         
          <div>
          <h2 className='text-lg flex justify-center px-2'>Heels</h2>
          <h2 className='text-lg flex justify-center px-2'>Sneakers</h2>
          <h2 className='text-lg flex justify-center px-2'>sandals</h2>
          <h2 className='text-lg flex justify-center px-2'>Boots</h2>
          <h2 className='text-lg flex justify-center px-2'>Flats</h2>
          </div>
          </div>
        </div>
        <div className=' flex justify-end'>
        <img 
          className='w-80 ml-10 pt-16 mr-0 flex justify-end'
          src="https://backyardshoez.co.ke/wp-content/uploads/2024/02/Backyard-Shoez-lug-sole-chunky-loafers-women-shoes-jpg.webp"
           alt="" />
        </div>
      </div>
      <div className='px-12'>
          <h1 className='font-bold text-2xl pt-10'>About Us:</h1>
          <div className='text-lg'>
          <p className=' '>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> <p>Maxime, eos. Ex corrupti voluptas eum cumque sit!</p>
           <p>Quia incidunt magnam aut adipisci, iusto ex voluptatibus placeat dolor,
            </p> 
            <p> nostrum at excepturi tempora.</p>
          </div>
         
        </div>
      
       
    </div>
  )
}

export default Footer