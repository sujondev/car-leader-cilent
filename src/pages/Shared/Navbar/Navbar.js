import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../context/Authprovider';

const Navbar = () => {
    const { user, logout } = useContext(Authcontext)
    const menuItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        {
            user ? <>
                <button className='btn btn-primary ml-5' onClick={logout}>Logout</button>
            </>
                :
                <li><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <div>
            <div className="navbar flex justify-between shadow-lg mb-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <Link to='/'><img className='h-10 ml-10' src="http://websmirno.site/carleader/html/images/logo-dark.svg" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost  lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div >
    );
};

export default Navbar;