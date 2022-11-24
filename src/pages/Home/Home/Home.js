import React from 'react';
import Banner from '../Banner/Banner';
import CarBuyOpportunity from '../CarBuyOpportunity/CarBuyOpportunity';
import Categoreies from '../Categoreies/Categoreies';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categoreies></Categoreies>
            <CarBuyOpportunity></CarBuyOpportunity>
        </div>
    );
};

export default Home;