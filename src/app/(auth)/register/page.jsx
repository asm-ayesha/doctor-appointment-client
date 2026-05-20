import React from 'react';
import RegisterFrom from './RegisterFrom';

export const metadata = {
    title: "Register | DocAppoint",
    description: "Create a DocAppoint account to book online appointments, connect with verified doctors, and manage your health dashboard easily.",
};

const RegisterPage = () => {
    return (
        <div>
            <RegisterFrom></RegisterFrom>
        </div>
    );
};

export default RegisterPage;