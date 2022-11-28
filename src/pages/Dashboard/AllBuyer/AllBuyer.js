import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyer = () => {
    const { data: AllBuyer, refetch } = useQuery({
        queryKey: ['allseller', 'role=Seller'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allseller?role=Buyer`)
            const data = await res.json()
            return data;
        }
    })

    const handleDelete = id => {
        fetch(`http://localhost:5000/buyer/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success("buyer delete sucessfully")
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            AllBuyer?.map((allbuyer, i) => <tr key={allbuyer._id}>
                                <th>{i + 1}</th>
                                <td>{allbuyer.name}</td>
                                <td>{allbuyer.email}</td>
                                <td><button onClick={() => handleDelete(allbuyer._id)} className='btn btn-xs'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyer;