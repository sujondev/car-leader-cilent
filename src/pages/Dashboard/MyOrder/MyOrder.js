import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Authcontext } from '../../../context/Authprovider';

const MyOrder = () => {
    const { user } = useContext(Authcontext)
    const { data: bookings } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/booking?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })
    return (
        <div className='m-10'>
            <h2 className="text-3xl mb-5">My Order</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>img</th>
                            <th>Name</th>
                            <th>price</th>
                            <th>Payment</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map(booking => <tr key={booking._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={booking?.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {booking?.productName}
                                </td>
                                <td>${booking.resellPrice}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">pay</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;