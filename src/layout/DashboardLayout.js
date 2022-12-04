import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Authcontext } from '../context/Authprovider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Navbar from '../pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(Authcontext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side mt-5">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {isBuyer && <li><Link to="/dashboard">My Order</Link></li>}
                        {isAdmin &&
                            <>
                                <li><Link to="/dashboard/allseller">All Seller</Link></li>
                                <li><Link to="/dashboard/allbuyer">All Buyer</Link></li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                                <li><Link to='/dashboard/myproduct'>My Product</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div >
    );
};

export default DashboardLayout;