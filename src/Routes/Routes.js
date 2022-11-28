import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";
import MyOrder from "../pages/Dashboard/MyOrder/MyOrder";
import MyProudct from "../pages/Dashboard/MyProduct/MyProudct";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Resellcars from "../Products/ResellCars/Resellcars";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/categorey/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/categorey/${params.id}`),
                element: <PrivateRoute>
                    <Resellcars></Resellcars>
                </PrivateRoute>
            }
        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrder></MyOrder>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myproduct',
                element: <MyProudct></MyProudct>
            }
        ]
    }
])

export default router