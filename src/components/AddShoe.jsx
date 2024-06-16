import { useEffect, useState } from "react"


function AddShoe() {
  const [categories,setCategories] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/category")
    .then((res) => res.json())
    .then((data) => {
      setCategories(data)
    })
    .catch((err) => console.log(err))

  },[])
  return (
    <div className='px-10'>
      <form className=''>
     
        <input type="text" placeholder='Enter shoe name...' />
        <input type="text" placeholder='Enter the type/description...'/>
        <input type="text" placeholder='Enter size..'/>
        <select className="block appearance-none w-full hover:border-gray-500 mt-3 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            {categories.map((category) => (<option key={category.id} value={category.id}>{category.name}</option>))}
            
        </select>
  
        
    
      </form>

    </div>
  )
}

export default AddShoe