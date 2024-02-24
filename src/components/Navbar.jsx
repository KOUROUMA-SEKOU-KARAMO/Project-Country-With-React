import React from 'react';
import {Link , NavLink } from "react-router-dom"


const Navbar = () => {
    return (
        <nav className='container-nav'>
              <ul>
                <li>
                    <NavLink to={"home"} className={(nav)=>(nav.isActive?"nav-active":"")}>
                          Home 
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"about"}  className={(nav)=>(nav.isActive?"nav-active":"")}>
                          About 
                    </NavLink>
                </li>
              </ul>
        </nav>
    );
};

export default Navbar;