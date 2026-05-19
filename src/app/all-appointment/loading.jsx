import React from 'react';
import { HashLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='flex justify-center items-center mt-20'>
            <HashLoader color='#2563EB' ></HashLoader>
        </div>
    );
};

export default loading;