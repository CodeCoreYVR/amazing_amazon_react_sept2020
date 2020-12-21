import React from 'react';
import {NavLink} from 'react-router-dom';


const Navbar=(props)=>{
    return(
        <nav>
            <NavLink to='/products'> Products Index</NavLink>
            |
            <NavLink to='/products/new'> New Products</NavLink>
        </nav>
        )
};

export default Navbar;