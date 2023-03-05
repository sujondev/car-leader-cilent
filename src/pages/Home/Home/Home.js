import React from 'react';
import Banner from '../Banner/Banner';
import CarBuyOpportunity from '../CarBuyOpportunity/CarBuyOpportunity';
import Categoreies from '../Categoreies/Categoreies';
import CustomerService from '../CustomerService/CustomerService';
import Promotions from '../Promotions/Promotions';

const Home = () => {
    return (
        <div className='w-full'>
            <Banner></Banner>
            <Categoreies></Categoreies>
            <CarBuyOpportunity></CarBuyOpportunity>
            <Promotions></Promotions>
            <CustomerService></CustomerService>
        </div>
    );
};

export default Home;