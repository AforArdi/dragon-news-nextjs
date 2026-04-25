import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from "date-fns";

const Header = () => {
    return ( 
        <div className='mt-12 container mx-auto flex flex-col items-center gap-3'>
            <Image src={logo} alt='Dragon News Logo' width={500} height={500} className=''></Image>
            <p className='text-[18px] text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='font-medium text-[20px] text-[#706F6F]'>
                {format(new Date(), "EEE, dd MMM, yyyy")}
            </p>
        </div>
     );
}
 
export default Header;