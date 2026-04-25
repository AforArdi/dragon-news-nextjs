import { getCategory } from "@/services/services";
import Link from "next/link";

const LeftSideBar = async () => {
    const categories = await getCategory();

    return ( 
        <div className="space-y-4">
            <h2 className="font-semibold text-xl text-[#403F3F]">All Category</h2>
            <div>
                {
                    categories.map(category=>
                        <ul key={category.category_id} className="font-semibold text-xl text-[#9F9F9F] mb-4">
                            <Link href={`https://openapi.programming-hero.com/api/news/category/{category.category_id}`}>
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