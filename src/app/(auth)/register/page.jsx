'use client'

import Link from "next/link";
import { useForm } from "react-hook-form"

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="flex flex-col items-center mt-20">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <h2 className="font-semibold text-2xl text-[#403F3F] text-center my-4">Register your account</h2>

                <label className="label">Name</label>
                <input
                    type="text"
                    {...register("name", { required: 'Name is required' })}
                    className="input"
                    placeholder="your name" />
                    {errors.name && <span>{errors.name.message}</span>}

                <label className="label">Photo URL</label>
                <input
                    type="text"
                    {...register("photoUrl")}
                    className="input"
                    placeholder="your photo url" />

                <label className="label">Email</label>
                <input
                    type="email"
                    {...register("email", { required: 'Email is required' })}
                    className="input"
                    placeholder="your email" />
                    {errors.email && <span>{errors.email.message}</span>}

                <label className="label">Password</label>
                <input
                    type="password"
                    {...register("password", { required: 'Password is required' })}
                    className="input"
                    placeholder="your password" />
                    {errors.password && <span>{errors.password.message}</span>}

                <button className="btn bg-[#403F3F] text-white mt-4">Register</button>

                <p className="text-[16px]">Already have an account? <Link href={'/login'} className="text-blue-500">Login</Link></p>
            </form>
        </div>
    );
}

export default RegisterPage;