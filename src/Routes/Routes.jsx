import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Layouts from "../Layouts/Layouts";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import Exploregadget from "../Components/Exploregadget";
import RighSideBar from "../Components/RighSideBar";
import Productdetails from "../Components/Productdetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layouts></Layouts>,
        hydrateFallbackElement: <div>Loading...</div>,
        children: [
            {
                path : '/',
                element: <Home></Home>,
                loader: () => fetch('../data.json'),
                children: [
                    {
                        path : '/rightSideBar/:catagory',
                        element : <RighSideBar></RighSideBar>,
                        loader : () => fetch ('../products_dummy.json'),
                      
                    },
                     {
                        path : '/',
                        element : <RighSideBar></RighSideBar>,
                        loader : () => fetch ('../products_dummy.json'),
                      
                    },
                ]
            },
            {
                path : '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path : '/dashboard',
                element : <Dashboard></Dashboard>
            },
            {
                
                path : '/productDetails/:product_id',
                element: <Productdetails></Productdetails>,
                loader: () => fetch('../products_dummy.json'),
            }
            
        ]
      
    },
    {
        
    }
])

export default router;