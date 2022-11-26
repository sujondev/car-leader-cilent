import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Resellcar from '../Resellcar';

const Resellcars = () => {
    const ResellCars = useLoaderData()
    return (
        <div className='grid grid-cols-1 pl-10 mt-10 md:grid-cols-2 lg:grid-cols-3'>
            {
                ResellCars.map(resellCar => <Resellcar key={resellCar._id} resellCar={resellCar}></Resellcar>)
            }
        </div>
    );
};

export default Resellcars;