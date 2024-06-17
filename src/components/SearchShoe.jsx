
function SearchShoe({searchInput,setSearchInput}) {

  return (
    <div>
         <div className='px-10'>
        <h2 className="font-bold text-xl ">Search Shoes</h2>
        <input 
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
       
        type="text" 
        className="border-b-4 border-gray-600 focus:border-pink-500 pt-4 pl-3 outline-none w-full" 
        placeholder="Search for your desired shoe..."/>
        <button className="bg-black my-3 px-7 ml-3 text-white font-semibold pb-2 pt-2" onClick={() => console.log("button clicked")}>Search</button>
       
        </div>
    </div>
  )
}

export default SearchShoe