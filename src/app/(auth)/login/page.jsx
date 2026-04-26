'use client'

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form"

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const {name, email, photoUrl, password} = data;
        const { data: res, error } = await authClient.signIn.email({
            name, // required
            email, // required
            password, // required
            image: photoUrl,
            callbackURL: '/',
        });
        if(error){
            alert(`${error.message}`)
        }
        if(res){
            alert('Login Success!')
        }
    };

    return (
        <div className="flex flex-col items-center mt-20">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <h2 className="font-semibold text-2xl text-[#403F3F] text-center my-4">Login your account</h2>

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
                    {...register("password", { required: 'password is required' })}
                    className="input"
                    placeholder="your password" />
                {errors.password && <span>{errors.password.message}</span>}

                <button className="btn bg-[#403F3F] text-white mt-4">Login</button>

                <p className="text-[16px]">Don't have an account? <Link href={'/register'} className="text-blue-500">Register</Link></p>
            </form>
        </div>
    );
}

export default LoginPage;