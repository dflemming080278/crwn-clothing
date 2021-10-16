import React from "react";

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
    /*
     * Children - exposes the inner items of an element, this
     * displays the text for the button
     */
    return ( 
        <button className={`${isGoogleSignIn ? 'google-sign-in': '' } custom-button`} { ...otherProps}>
            { children }
        </button>
     );
}
 
export default CustomButton;