import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <nav className=" pt-4 pb-4  my-6 flex justify-end">
        
        <NavLink to={'/'} className='px-10 font-bold text-xl text-white'>
            Home
        </NavLink>
        <NavLink to={'/login'} className='font-bold text-xl text-white'>
            Register
        </NavLink>
        <NavLink to={'/shoelist'} className={'px-10 font-bold text-xl text-white'}>
            ShoeList
        </NavLink>
        
    </nav>
  )
}

export default NavBar