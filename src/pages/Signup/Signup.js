import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../context/Authprovider';
import useToken from '../../hooks/useToken';
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
    const [signupError, setSignupError] = useState(null)
    const { createuser, userUpdateProfile, googleSignIn } = useContext(Authcontext)
    const [createUserEmail, setCreateUserEmail] = useState("")
    const navigate = useNavigate()
    const [token] = useToken(createUserEmail)
    const provider = new GoogleAuthProvider()
    const { register, handleSubmit, formState: { errors } } = useForm();

    if (token) {
        navigate('/')
    }

    const handleGoogleSignIn = () => {
        googleSignIn(provider)
            .then(result => {
                const user = result.user;
                toast.success("googleSignIn Successfully")
                console.log(user);
                saveUser(user.displayName, user.email, 'buyer')
            })
    }

    const handleSignup = data => {
        const { name, email, password, option } = data;
        createuser(email, password)
            .then(result => {
                setSignupError(null)
                const user = result.user;
                const profile = {
                    displayName: name
                }
                userUpdateProfile(profile)
                saveUser(name, email, option)
                console.log(user);
            })
            .catch(error => setSignupError(error.message))
    }

    const saveUser = (name, email, option) => {
        const users = {
            name,
            email,
            role: option
        }

        console.log(users);

        fetch('https://car-leader-server-sujondev.vercel.app/users', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('successfully signup')
                    setCreateUserEmail(email)
                }
            })
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
                        {signupError && <p className="text-red-600">{signupError}</p>}
                    </div>
                </form>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn w-full btn-ghost'><FcGoogle className='text-3xl mr-5'></FcGoogle> CONTINUE WITH GOOGLE</button>
                <p className='mt-5'>Already have An account? <Link className='text-primary' to="/login">login</Link> </p>
            </div>
        </div >
    );
};

export default Signup;