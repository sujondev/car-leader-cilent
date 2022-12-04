import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Authcontext } from '../../../context/Authprovider';
const AddProduct = () => {
    const { user } = useContext(Authcontext)
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: user?.email,
            sellerName: user?.displayName
        }
    });
    const navigate = useNavigate()
    const handleAddProudct = data => {

        console.log(data);

        fetch('https://car-leader-server-sujondev.vercel.app/product', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('sucessfully add proudct')
                    navigate('/dashboard/myproduct')

                }
            })
    }
    return (
        <div>
            <div className='h-[900px] flex justify-center items-center mt-20'>
                <div className='w-96 p-7 shadow-md'>
                    <h2 className='text-xl text-center font-bold'>Add your product</h2>
                    <form onSubmit={handleSubmit(handleAddProudct)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Car Name</span></label>
                            <input type="text" {...register("name", { required: "CarName is required" })} className="input input-bordered w-full max-w-xs" />
                            {errors.carname && <p className="text-red-600">{errors.carname?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">seller Name</span></label>
                            <input type="text" {...register("sellerName", { required: "sellerName is required" })} className="input input-bordered w-full max-w-xs" disabled />
                            {errors.sellerName && <p className="text-red-600">{errors.sellerName?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="email" {...register("email", { required: "email is required" })} className="input input-bordered w-full max-w-xs" disabled />
                            {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Orginal price</span></label>
                            <input type="text" {...register("orginalPrice", { required: "Orginal Price is required" })} className="input input-bordered w-full max-w-xs" />
                            {errors.orginalprice && <p className="text-red-600">{errors.orginalprice?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">resellPrice</span></label>
                            <input type="text" {...register("resellPrice", { required: "resellPrice is required" })} className="input input-bordered w-full max-w-xs" />
                            {errors.resellprice && <p className="text-red-600">{errors.resellprice?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">YearOfUsing</span></label>
                            <input type="text" {...register("yearofusing", { required: "YearOfUsing is required" })} className="input input-bordered w-full max-w-xs" />
                            {errors.yearofusing && <p className="text-red-600">{errors.yearofusing?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">conditon</span></label>
                            <input type="text" {...register("conditon", { required: "conditon is required" })} className="input input-bordered w-full max-w-xs" />
                            {errors.conditon && <p className="text-red-600">{errors.conditon?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">location</span></label>
                            <input type="text" {...register("location", { required: "location is required" })} className="input input-bordered w-full max-w-xs" />
                            {errors.location && <p className="text-red-600">{errors.location?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Description</span></label>
                            <textarea {...register('description', { required: "description is required" })} className="textarea textarea-bordered" cols="30" rows="5"></textarea>
                            {errors.description && <p className="text-red-600">{errors.description?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Img Link</span></label>
                            <input type="text" {...register("img", { required: "img Link is required" })} className="input input-bordered w-full max-w-xs" />
                            {errors.img && <p className="text-red-600">{errors.img?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs mt-5">
                            <select {...register('categoreyId')} className="select select-bordered w-full max-w-xs">
                                <option value='6380fdf1f8eac56e8f4430ff'>BMW</option>
                                <option value="6380fdf1f8eac56e8f4430fd">AUSTER</option>
                                <option value="6380fdf1f8eac56e8f4430fe">SERETTA</option>
                                <option value="6380fdf1f8eac56e8f443100">TESSLA</option>
                            </select>
                        </div>
                        <input className='btn btn-primary w-full mt-5' value="AddProudct" type="submit" />
                    </form>
                </div>
            </div >
        </div>
    );
};

export default AddProduct;