import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate()
    const gohome = () => {
        navigate('/')
    }
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
            <p className="text-lg mb-8">Oops! The page you are looking for does not exist.</p>
            <button onClick={gohome} className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg hover:bg-blue-600 transition-colors">Go back home</button>
        </div>

        // <div>
        //     <h1>Oops!</h1>
        //     <p className='text-red-600'>Sorry, an unexpected error has occurred.</p>
        //     <p>
        //         <i>{error.statusText || error.message}</i>
        //     </p>
        // </div>
    );
};

export default ErrorPage;