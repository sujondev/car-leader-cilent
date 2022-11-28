import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSeller = () => {
    const { data: allSellers, refetch } = useQuery({
        queryKey: ['allseller', 'role=Seller'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allseller?role=Seller`)
            const data = await res.json()
            return data;
        }
    })

    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/seller/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success("seller delete sucessfully")
                }

            })
    }

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
                            allSellers?.map((allseller, i) => <tr key={allseller._id}>
                                <th>{i + 1}</th>
                                <td>{allseller.name}</td>
                                <td>{allseller.email}</td>
                                <td><button className='btn btn-xs'>verify</button></td>
                                <td><button onClick={() => handleDelete(allseller._id)} className='btn btn-xs'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;