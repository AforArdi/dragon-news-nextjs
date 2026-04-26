'use client'

import Image from "next/image";
import Link from "next/link";
import userIcon from '@/assets/user.png'
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    console.log(user.image);

    return ( 
        <div className="container mx-auto flex items-center justify-between mt-7">
            <div></div>
            <div className="flex items-center gap-3">
                <ul><NavLink href={'/'}>Home</NavLink></ul>
                <ul><NavLink href={'/about'}>About</NavLink></ul>
                <ul><NavLink href={'/career'}>Career</NavLink></ul>
            </div>
            <div className="flex items-center gap-3">
                <Image src={user.image || userIcon} alt="User Icon" width={40} height={40}></Image>
                <Link href={'/login'}>
                    <button className="btn bg-[#403F3F] text-white">Login</button>
                </Link>
            </div>
        </div>
     );
}
 
export default Navbar;