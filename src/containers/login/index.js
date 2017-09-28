import React from 'react';
import LoginForm from './LoginForm';
import logo from '../../logo.png';

const LoginPage = () => (
    <div className="login-form">
        <div className="logo">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="description">Keep track on your expense to create a perfect planning</p>
        </div>
        <div className="col-xs-10 col-xs-offset-1">
                <LoginForm />
        </div>
    </div>
);

export default LoginPage;
