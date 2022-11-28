import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import Categorey from './Categorey';

const Categoreies = () => {
    const { data: categoreies, isLoading } = useQuery({
        queryKey: ['categorey'],
        queryFn: async () => {
            const res = await fetch('https://car-leader-server-sujondev.vercel.app/categorey')
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='mb-20'>
            <div className='text-center m-10'>
                <h3 className='text-4xl font-bold'>Categorey By Car</h3>
                <p className='xl text-primary font-semibold mt-5'>WE WORK WITH BRANDS</p>
            </div>
            <div className='flex justify-center gap-20'>
                {
                    categoreies?.map(categorey =>
                        <Link key={categorey._id} to={`/categorey/${categorey._id}`}><Categorey categorey={categorey}></Categorey></Link>
                    )
                }
            </div>
        </div>
    );
};

export default Categoreies;