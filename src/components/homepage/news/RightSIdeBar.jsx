'use client'

import { authClient } from "@/lib/auth-client";
import { createAuthClient } from "better-auth/client";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSIdeBar = () => {
    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    const handleGithubSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
        });
    }

    return (
        <div className="space-y-3">
            <h2 className="font-semibold text-xl text-[#403F3F]">Login with</h2>
            <button 
            onClick={handleGoogleSignIn}
            className="btn border text-blue-500 border-blue-500 px-8">
                <FaGoogle></FaGoogle> Login with Google
            </button>
            <button 
            onClick={handleGithubSignIn}
            className="btn px-8">
                <FaGithub></FaGithub> Login with Github
            </button>
        </div>
    );
}

export default RightSIdeBar;