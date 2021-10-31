import React, { Component } from "react";


import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { createUserProfileDocument, firebaseCreateUserWithEmailAndPassword } from '../../firebase/firebase.utils';
//import { createUserProfileDocument, firebaseCreateUserWithEmailAndPassword } from '../../firebase/firebase.utils';


import './sign-up.styles.scss';

class Signup extends Component {
    constructor(){
        super();
        this.state= {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async  (event) => {
        event.preventDefault();

        //const { displayName, email, password, confirmPassword } = this.state;
        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert("password don't match");
            return;
        }

        try {

            const { user } = firebaseCreateUserWithEmailAndPassword(
                displayName,
                email, 
                password
            );
            
            
            await createUserProfileDocument(user);

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

            
        } catch(error) {
            console.error(error);
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        
        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password.</span>
                <form className='sign-up-form' onSubmit= { this.handleSubmit }>
                        <FormInput 
                            handleChange={ this.handleChange } 
                            label='Display Name'
                            name='displayName' 
                            type='text' 
                            value={ displayName } 
                            required/>
                        <FormInput 
                            handleChange={ this.handleChange } 
                            label='Email'
                            name='email' 
                            type='email' 
                            value={ email } 
                            required/>
                        <FormInput 
                            handleChange={ this.handleChange } 
                            label='Password'
                            name='password' 
                            type='password' 
                            value={ password } 
                            required/>
                        <FormInput 
                            handleChange={ this.handleChange } 
                            label='Confirm Password'
                            name='confirmPassword' 
                            type='password' 
                            value={ confirmPassword } 
                            required/>
                        <div className='buttons'>
                            <CustomButton type='submit'>SIGN UP</CustomButton>
                        </div>
                    </form>
            </div>
        );
    }


}

export default Signup;