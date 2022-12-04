import React from 'react';
import bgimg1 from '../../../assets/img/bg1.jpg';
import './CarBuyOpportunity.css'
import { FaCar, FaAward, FaCarSide } from "react-icons/fa";
import { HiTag } from "react-icons/hi2";

const CarBuyOpportunity = () => {
    return (
        <div>
            <div className="bg-img mt-5 overflow-hidden" style={{ backgroundImage: `url(${bgimg1})`, backgroundSize: 'cover' }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="mt-10">
                        <h1 className="mb-5 text-3xl font-bold text-white">Reasons to Buy From Car Leader</h1>
                        <p className="mb-5 text-primary font-bold">WE'RE HERE FOR WHATEVER YOU NEED</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-4 p-10'>
                    <div className='flex'>
                        <div className='bg-primary text-white p-3 rounded-full mr-5 mb-[80px]'>
                            <FaCar className='text-5xl'></FaCar>
                        </div>
                        <div>
                            <h4 className='text-xl font-bold text-white'>Certified Vehicles That Look and Feel New</h4>
                            <p className="text-white">Each vehicle is detailed and washed to guarantee that you feel like the first owner.</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className=' bg-primary text-white p-3 rounded-full mr-5 mb-[80px]'>
                            <HiTag className='text-5xl'></HiTag>
                        </div>
                        <div>
                            <h4 className='text-xl font-bold text-white'>We Start With Our Best Price</h4>
                            <p className="text-white">Our internet price is posted at or below market level, and we post a NADA price on our windows so you can compare.</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='bg-primary text-white p-3 rounded-full mr-5 mb-[80px]'>
                            <FaCarSide className='text-5xl'></FaCarSide>
                        </div>
                        <div>
                            <h4 className='text-xl font-bold text-white'>Free Autocheck Vehicle History Report</h4>
                            <p className="text-white">We fully disclose the histories of our vehicles, including accident history, service records, number of prior owners, and more.</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='bg-primary text-white p-3 rounded-full mr-5 mb-[80px]'>
                            <FaAward className='text-5xl'></FaAward>
                        </div>
                        <div>
                            <h4 className='text-xl font-bold text-white'>
                                3-Month or 3,000 Miles Limited Warranty</h4>
                            <p className="text-white">Every Car Leader Certified vehicle comes with a 3 month / 3,000 mile Limited Warranty included in the purchase price.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CarBuyOpportunity;