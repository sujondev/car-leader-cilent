import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const order = useLoaderData()
    console.log(order);
    return (
        <div>
            <h3 className='text-2xl mt-5'>Payment for {order.productName}</h3>
            <p className='mt-1'>Please pay <strong>${order.resellPrice}</strong> on metting location {order.mettingLocation}</p>
        </div>
    );
};

export default Payment;