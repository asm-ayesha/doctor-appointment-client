import React, { Suspense } from 'react';
import LoginFrom from './LoginFrom';

export const metadata = {
    title: "Login | DocAppoint",
    description: "Log in to your DocAppoint account to book appointments with best doctors.",
};

const LoginPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LoginFrom></LoginFrom>
        </Suspense>
    );
};

export default LoginPage;