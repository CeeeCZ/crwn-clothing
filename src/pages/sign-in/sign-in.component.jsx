import React, { useState } from 'react';
import './sign-in.styles.scss'
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'

const SignIn = () => {
    const [signIn, setSignIn] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault()

        setSignIn({
            email: "",
            password: ""
        });
    }

    const handleChange = (event) => {
        const { value, name } = event.target

        setSignIn(prevSignIn => {
            return {
                ...prevSignIn,
                [name]: value
            };
        });
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={(ev) => handleSubmit(ev)}>
                <FormInput type='email' name='email' value={signIn.email} handleChange={(ev) => handleChange(ev)} label="Email" required/>
                <FormInput type='password' name='password' value={signIn.password} handleChange={(ev) => handleChange(ev)} label="Password" required/>
                <div className="buttons">
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Sign in with Google</CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn;