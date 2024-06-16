import React from 'react'
import NavBar from '../components/NavBar'
import LoginDetails from '../components/LoginDetails'

function Login() {
  return (
    <div>
      <div>
        <h1 className='font-bold text-2xl text-white px-6 pt-5 font-style: italic'>Kindly Register Before Purchasing Your Orders</h1>
      </div>
        <NavBar/>
        <LoginDetails/>
    </div>
  )
}

export default Login