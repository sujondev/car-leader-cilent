import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";
import AllBuyer from "../pages/Dashboard/AllBuyer/AllBuyer";
import AllSeller from "../pages/Dashboard/Allseller/AllSeller";
import MyOrder from "../pages/Dashboard/MyOrder/MyOrder";
import MyProudct from "../pages/Dashboard/MyProduct/MyProudct";
import Payment from "../pages/Dashboard/Payment/Payment";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Signup from "../pages/Signup/Signup";
import Resellcars from "../Products/ResellCars/Resellcars";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
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
                loader: ({ params }) => fetch(`https://car-leader-server-sujondev.vercel.app/categorey/${params.id}`),
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
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrder></MyOrder>,
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myproduct',
                element: <MyProudct></MyProudct>
            },
            {
                path: '/dashboard/allseller',
                element: <AdminRoute>
                    <AllSeller></AllSeller>
                </AdminRoute>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AdminRoute>
                    <AllBuyer></AllBuyer>
                </AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                loader: ({ params }) => fetch(`https://car-leader-server-sujondev.vercel.app/booking/${params.id}`),
                element: <Payment></Payment>
            }
        ]
    }
])

export default router