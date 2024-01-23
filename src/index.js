import React,  { lazy , Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Header from './components/Header';
import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from './components/Grocery';
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom';


//chunking
//dynamically bundling
//code splitting
//lazy loading
//on demand loading
const Grocery = lazy(()=>import("./components/Grocery")); //dynamic loading
const About = lazy(()=>import("./components/About")); //dynamic loading
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
                                element: <Suspense fallback={<h1>loading</h1>}><About></About> </Suspense>
                        },
                        {
                                path:"/grocery",
                                element: <Suspense fallback={<h1>loading</h1>}><Grocery /></Suspense>
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



