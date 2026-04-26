'use client'

import Image from "next/image";
import Link from "next/link";
import userIcon from '@/assets/user.png'
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
    // isPending to show the pending spinner on the navbar user icon section
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    return ( 
        <div className="container mx-auto flex items-center justify-between mt-7">
            <div></div>
            <div className="flex items-center gap-3">
                <ul><NavLink href={'/'}>Home</NavLink></ul>
                <ul><NavLink href={'/about'}>About</NavLink></ul>
                <ul><NavLink href={'/career'}>Career</NavLink></ul>
            </div>

            {/* ternary chain */}
            {isPending ? 
            <span className="loading loading-ring loading-xl"></span>
            : user ? <div className="flex items-center gap-3">
                <h2>Hello, {user?.name}</h2>
                <Image src={user?.image || userIcon} alt="User Icon" width={60} height={60}></Image>
                <Link href={'/login'}>
                    <button
                    onClick={async ()=> await authClient.signOut()}
                    className="btn bg-[#403F3F] text-white">Logout</button>
                </Link>
            </div> :
            <button className="btn bg-[#403F3F] text-white">Login</button>}
        </div>
     );
}
 
export default Navbar;