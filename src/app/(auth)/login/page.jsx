import React from 'react';
import LoginFrom from './LoginFrom';

export const metadata = {
    title: "Login | DocAppoint", 
    description: "Log in to your DocAppoint account to book appointments with best doctors.",
};

const LoginPage = () => {
    return (
        <div>
            <LoginFrom></LoginFrom>
        </div>
    );
};

export default LoginPage;