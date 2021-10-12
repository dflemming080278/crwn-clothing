import React from "react";

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from "react-router-dom";

const Header = () => {
    return (  
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo'/>
            </Link>
            <div className="options">
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/contact' className='option'>CONTACT</Link>
            {/* <Link to='/' className='option'></Link>
            <Link to='/' className='option'></Link> */}
            </div>
        </div>
    );
}
 
export default Header;