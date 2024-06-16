import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import ShoeList from './ShoeList';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path:'/login',
        element: <Login/>
    },
    {
        path:'/shoelist',
        element:<ShoeList/>
    }
   
])

export default router;