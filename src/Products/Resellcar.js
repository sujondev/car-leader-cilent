import React from 'react';

const Resellcar = ({ resellCar }) => {
    console.log(resellCar);
    const { name, img, location, orginalPrice, resellPrice, yearofusing, conditon, description } = resellCar;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='w-full' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description?.length > 180 ? description?.slice(0, 180) + '.' : description}</p>
                    <p className='text-primary text-semibold'>Loacation: {location}</p>
                    <p className='text-primary text-semibold'>OrginalPrice: ${orginalPrice}</p>
                    <p className='text-primary text-semibold'>ResellPrice: ${resellPrice}</p>
                    <p className='text-primary text-semibold'>Yearofusing: {yearofusing}month</p>
                    <p className='text-primary text-semibold'>Conditon: {conditon}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resellcar;