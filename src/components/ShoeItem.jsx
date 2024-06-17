import { Link } from "react-router-dom";

function ShoeItem({id,name,image,description,price, soldOut,addToCart}) {

  return (
    <Link to={`/shoe/${id}`}>
    <div>
        <div>
         <img
         className='w-3/4 hover:w-full'
         src={image} alt='' />
        <div className=" text-xl  text-white">
          <h5>{name}</h5>
          <p>{description}</p>
          <h5>price: $ {price}</h5>
       
          {soldOut ? (
        <p className="text-red-500 font-bold">Sold Out</p>
      ) : (
        <button onClick={addToCart} className="bg-blue-500 rounded-lg text-white px-2 py-1 ml-6 mt-2">
          Add to Cart
        </button>
      )}
        </div>
        </div>

       
    </div>
    </Link>
  )
}

export default ShoeItem;