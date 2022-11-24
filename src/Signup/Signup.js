import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleSignup = data => {
        console.log(data);
    }
    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow-md'>
                <h2 className='text-xl text-center font-bold'>SignUp</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" {...register("name", { required: "Name is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: "password must be 6 characters or long" } })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs mt-5">
                        <select {...register('option')} className="select select-bordered w-full max-w-xs">
                            <option value='Buyer'>Buyer</option>
                            <option value="Seller">Seller</option>
                        </select>
                        {errors.option && <p className="text-red-600">{errors.option?.message}</p>}
                    </div>
                    <input className='btn btn-primary w-full mt-5' value="Signup" type="submit" />
                    <div>
                        {/* {loginError && <p className="text-red-600">{loginError}</p>} */}
                    </div>
                </form>
                <p className='mt-5'>Already have An account? <Link className='text-primary' to="/login">login</Link> </p>
            </div>
        </div >
    );
};

export default Signup;