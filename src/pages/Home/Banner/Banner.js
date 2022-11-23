import React from 'react';
import Carrousel from './Carrousel';

const Banner = () => {
    const bannerData = [
        {
            id: 1,
            imgLink: 'https://capricathemes.com/prestashop/PRS05/PRS050112/modules/ct_imageslider/views/img/sample-1.jpg',
            next: 2,
            prev: 3,
        },
        {
            id: 2,
            imgLink: 'https://capricathemes.com/prestashop/PRS05/PRS050112/modules/ct_imageslider/views/img/sample-2.jpg',
            next: 3,
            prev: 1
        },
        {
            id: 3,
            imgLink: 'https://capricathemes.com/prestashop/PRS05/PRS050112/modules/ct_imageslider/views/img/sample-3.jpg',
            next: 1,
            prev: 2
        }
    ]
    return (
        <div className='mt-5'>
            <div className="carousel w-full">
                {
                    bannerData.map(bannerItem => <Carrousel key={bannerItem.id} bannerItem={bannerItem}></Carrousel>)
                }
            </div>
        </div>
    );
};

export default Banner;