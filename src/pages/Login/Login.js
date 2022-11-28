import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../context/Authprovider';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [loginError, setLoginError] = useState('')
    const { signIn } = useContext(Authcontext)
    const [userloginEmail, setUserLoginEmail] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';
    const [token] = useToken(userloginEmail)
    const { register, handleSubmit, formState: { errors } } = useForm();
    if (token) {
        navigate(from, { replace: true })
    }

    const handleLogin = (data) => {
        const { email, password } = data;
        signIn(email, password)
            .then(result => {
                setLoginError('')
                const user = result.user;
                console.log(user);
                toast.success('successfully Login')
                setUserLoginEmail(email)
            })
            .catch(errors => setLoginError(errors.message));
    }
    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow-md'>
                <h2 className='text-xl text-center font-bold'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
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
                    <input className='btn btn-primary w-full mt-5' value="Login" type="submit" />
                    <div>
                        {loginError && <p className="text-red-600">{loginError}</p>}
                    </div>
                </form>
                <p>New to CarLeader? <Link className='text-primary' to="/signup">Create new account</Link> </p>
            </div>
        </div >
    );
};

export default Login;