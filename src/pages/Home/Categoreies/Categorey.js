import React from 'react';

const Categorey = ({ categorey }) => {
    const { name, img } = categorey;
    return (
        <div>
            <img src={img} alt="" />
            <h3 className='text-xl font-semibold mt-5'>{name}</h3>
        </div>
    );
};

export default Categorey;