import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";

const AuthLayout = ({children}) => {
    return ( 
        <>
        <Navbar></Navbar>
        {children}
        </>
     );
}
 
export default AuthLayout;