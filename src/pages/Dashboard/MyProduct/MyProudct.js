import { useQuery } from '@tanstack/react-query';
import { success } from 'daisyui/src/colors';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Authcontext } from '../../../context/Authprovider';

const MyProudct = () => {

    const { user } = useContext(Authcontext)
    const { data: myproducts, isLoading, refetch } = useQuery({
        queryKey: ['myproduct', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproduct?email=${user.email}`)
            const data = await res.json()
            return data;
        }
    })


    const handleDelete = id => {
        fetch(`http://localhost:5000/myproduct/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success('succesfully delete')
                    refetch()
                }
            })
    }

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
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myproducts?.map(myproduct => <tr key={myproduct._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={myproduct?.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {myproduct?.name}
                                </td>
                                <td>${myproduct.resellPrice}</td>
                                <th>
                                    <button onClick={() => handleDelete(myproduct._id)} className="btn btn-ghost btn-xs">Delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProudct;