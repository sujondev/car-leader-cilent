import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Categorey from './Categorey';

const Categoreies = () => {
    const [categoreies, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categorey')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='mb-20'>
            <div className='text-center m-10'>
                <h3 className='text-4xl font-bold'>Categorey By Car</h3>
                <p className='xl text-primary font-semibold mt-5'>WE WORK WITH BRANDS</p>
            </div>
            <div className='flex justify-center gap-20'>
                {
                    categoreies.map(categorey => <Link key={categorey._id} to={`/categorey/${categorey._id}`}><Categorey categorey={categorey}></Categorey></Link>)
                }
            </div>
        </div>
    );
};

export default Categoreies;