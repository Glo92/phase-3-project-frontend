import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { useParams } from 'react-router-dom'
import ShoeItem from '../components/ShoeItem'

function ShoeDetails() {
  const [shoe,setShoe] =useState()
  const params = useParams()
  console.log(params)

  useEffect(() => {
    fetch(`http://localhost:8000/shoe/${params.shoeId}`)
    .then((res) => res.json()).then((data) => setShoe(data))
  },[params.shoeId])
  return (
    <div>
      <NavBar/>
      <ShoeItem {...shoe}/>
    </div>
  )
}

export default ShoeDetails;