import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSeller = () => {
    const { data: allSellers } = useQuery({
        queryKey: ['allseller', 'role=Seller'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allseller?role=Seller`)
            const data = await res.json()
            return data
        }
    })
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allSellers.map((allseller, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{allseller.name}</td>
                                <td>{allseller.email}</td>
                                <td><button className='btn btn-xs'>verify</button></td>
                                <td><button className='btn btn-xs'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;