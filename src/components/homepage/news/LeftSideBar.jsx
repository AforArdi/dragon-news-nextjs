import Link from "next/link";

const LeftSideBar = ({categories, activeId}) => {
    /**
     * what happens if I call the getCategory function in here?
     * I couldn't figure out how to work with the 'activeId' I mean how to get that?
     * But for now let's just go with it with the teacher
     */
    return ( 
        <div className="space-y-4">
            <h2 className="font-semibold text-xl text-[#403F3F]">All Category</h2>
            <div>
                {
                    categories.map(category=>
                        <ul key={category.category_id} className={`${activeId === category.category_id ? 'bg-slate-200 p-2 rounded-lg' : ''} font-semibold text-xl text-[#9F9F9F] mb-4`}>
                            <Link href={`/category/${category.category_id}`}>
                                <li>{category.category_name}</li>
                            </Link>
                        </ul>
                    )
                }
            </div>
        </div>
     );
}
 
export default LeftSideBar;