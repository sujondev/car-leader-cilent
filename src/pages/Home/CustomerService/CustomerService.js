import React, { useState } from 'react';
import 'animate.css/animate.min.css';
const CustomerService = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleToggle = () => {
        setIsVisible(!isVisible);
    };
    return (
        <div className="">
            <div className='w-full flex justify-center mt-10'>
                <button
                    onClick={handleToggle}
                    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full animate__animated animate__bounce`}
                >
                    Contact Us
                </button>
            </div>
            <div
                className={`${isVisible ? 'block' : 'hidden'}`}
            >
                <form className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-lg font-medium mb-4">Contact Us</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" for="name">
                            Name
                        </label>
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="name"
                            type="text"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" for="email">
                            Email
                        </label>
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="email"
                            type="email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" for="message">
                            Message
                        </label>
                        <textarea
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="message"
                        />
                    </div>
                    <button className="bg-purple-500 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-full">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CustomerService;