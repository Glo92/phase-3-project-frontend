import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import ShoeList from './ShoeList';

import ShoeDetails from './ShoeDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path:'/login',
        element: <Login/>,
    },
    {
        path:'/shoelist',
        element:<ShoeList/>,
    },
    {
        path:'/shoes/:shoeId',
        element: <ShoeDetails/>,
    },
 
   
])

export default router;