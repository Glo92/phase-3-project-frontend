import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Logo from "../components/Logo"


function Home() {
 
  
  return (
  <div className="bg-pink-400">
    <div className="bg-black">
       <h2 className="text-2xl flex justify-center text-white pl-10 pt-3 pb-3 font-bold font-style: italic ">Women FootWearz</h2>
       <p className="text-2xl text-white pl-10 pt-1 pb-4 font-bold font-style: italic">To Step out in style, and total confidence</p>
    </div>
    <NavBar/>
    <Logo/>
  
    <Footer/>
  </div>

  )
}

export default Home