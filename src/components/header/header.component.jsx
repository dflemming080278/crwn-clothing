import React from "react";

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from "react-router-dom";

import { firebaseSignOut } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => {
    return (  
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo'/>
            </Link>
            <div className="options">
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/contact' className='option'>CONTACT</Link>
            {
                currentUser ?
                    <div className='option' onClick= { firebaseSignOut }>SIGN OUT</div>
                :
                    <Link className='option' to='/signin'>SIGN IN</Link>
            }
            {/* <Link to='/' className='option'></Link>
            <Link to='/' className='option'></Link> */}
            </div>
        </div>
    );
}
 
export default Header;