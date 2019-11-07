import React from 'react';
import './signin-signup.style.scss';
import SignUp from '../../components/sign-up/sign-up.component';
import SignIn from '../../components/sign-in/sign-in.component';

const SignInSingnUpPage = () => (
    <div className = 'sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInSingnUpPage;