// import { render } from "@testing-library/react";
import React, { Component } from "react";

import './signin.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

 import { firebaseEmailAndPasswordSignIn, firebaseGoogleSignIn } from '../../firebase/firebase.utils';



class SignIn extends Component {
    constructor() {
        super();
        this.state= {
            email:'',
            password:''
        };
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({[name]: value});
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const {email, password } = this.state;

        firebaseEmailAndPasswordSignIn(email, password);
        this.setState({ email:'', password:'' });
    }

    render() 
    {
        return (  
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password.</span>
                <form onSubmit={ this.handleSubmit }>
                    <FormInput 
                        handleChange={ this.handleChange } 
                        label='Email'
                        name='email' 
                        type='email' 
                        value={ this.state.email } 
                        required/>
                    <FormInput 
                        handleChange={ this.handleChange } 
                        label='Password'
                        name='password' 
                        type='password' 
                        value={ this.state.password } 
                        required/>
                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                        <CustomButton onClick= { firebaseGoogleSignIn } isGoogleSignIn>
                            {' '}
                            Sign in with Google{' '}
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
 
export default SignIn 