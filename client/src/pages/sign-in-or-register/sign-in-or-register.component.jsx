import React from 'react';
import './sign-in-or-register.component.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInOrRegister = () => (
  <div className='sign-in-or-register'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInOrRegister;
