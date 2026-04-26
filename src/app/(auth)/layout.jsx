import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";
import { montserrat } from "../layout";

const AuthLayout = ({children}) => {
    return ( 
        <div className={`${montserrat.className} bg-gray-100`}>
        <Navbar></Navbar>
        {children}
        </div>
     );
}
 
export default AuthLayout;