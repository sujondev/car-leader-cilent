import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk)

const Payment = () => {
    const order = useLoaderData()
    console.log(order);
    return (
        <div>
            <h3 className='text-2xl mt-5'>Payment for {order.productName}</h3>
            <p className='mt-1'>Please pay <strong>${order.resellPrice}</strong> on metting location {order.mettingLocation}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm order={order} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;