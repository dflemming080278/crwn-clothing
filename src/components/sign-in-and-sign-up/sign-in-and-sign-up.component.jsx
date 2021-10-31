import React from "react";
import Signup from "../sign-up/sign-up.component";
import SignIn from "../signin/signin.component";

import './sign-in-and-sign-up.styles.scss';


const SignInAndSignUpPage = () => {
    return (  
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <Signup />
        </div>

    );
}
 
export default SignInAndSignUpPage;