import React from 'react'
import NavBar from '../components/NavBar'
import LoginDetails from '../components/LoginDetails'

function Login() {
  return (
    <div>
      <div>
        <h1 className='font-bold text-2xl text-white bg-black pb-4 px-6 pt-5 font-style: italic'>Kindly Register Before Purchasing Your Orders</h1>
      </div>
        <NavBar/>
        <LoginDetails/>

        <div> <h3 className='font-bold font-style: italic text-center text-3xl text-white mt-8'>YOU'RE MOST WELCOMED TO SHOP HERE</h3></div>

        <div className='flex justify-center '>
         
        <img 
        className='w-60 mx-6 my-7 flex justify-items-center '
        src="https://backyardshoez.co.ke/wp-content/uploads/2023/12/Backyard-Shoez-sneakers10-450x450.webp" 
        alt="" />

        </div>
    </div>
  )
}

export default Login;