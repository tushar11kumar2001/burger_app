import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Header from './components/Header';
import RestaurantMenu from './components/RestaurantMenu';
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom';

const AppLayout = ()=>{
        return (
                <>
                 <Header />
                 <Outlet />
                </>
        )
}
const appRouter = createBrowserRouter([
        {
                path:"/",
                element: <AppLayout />,
                children: [
                        {
                                path:"/",
                                element: <App />
                        },
                        {
                                path:"/contact",
                                element: <Contact></Contact>
                        },
                        {
                                path:"/about",
                                element: <About></About>
                        },
                        {
                                path:"/restaurants/:restId",
                                element: <RestaurantMenu />
                        }
                ],
                errorElement: <Error/>
        },

   
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
  <RouterProvider router={appRouter}/>
       

   



);



