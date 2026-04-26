import Link from "next/link";

const NotFoundPage = () => {
    return ( 
        <div className="flex flex-col justify-center items-center mt-10 gap-4">
            <h2 className="font-bold text-5xl">Page Not Found</h2>
            <Link href={'/'}>
                <button className="btn btn-primary">Home</button>
            </Link>
        </div>
     );
}
 
export default NotFoundPage;