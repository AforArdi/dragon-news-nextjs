import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSIdeBar from "@/components/homepage/news/RightSIdeBar";
import { getCategory, getNewsByCategory } from "@/lib/services";

const NewsByCategory = async ({params}) => {
    const {id} = await params;
    const categories = await getCategory();
    const allNews = await getNewsByCategory(id);

    return (
        <div className="container mx-auto mt-6 grid grid-cols-12 gap-6">
            <div className="col-span-3">
                <LeftSideBar
                    categories={categories}
                    activeId={id}
                ></LeftSideBar>
            </div>

            <div className="col-span-6">
                <h2 className="font-semibold text-xl text-[#403F3F]">Dragon News Home</h2>
                <div>
                    {
                        allNews.map(news=>
                            <NewsCard
                            key={news._id}
                            news={news}
                            ></NewsCard>
                        )
                    }
                </div>
            </div>

            <div className="col-span-3">
                <RightSIdeBar></RightSIdeBar>
            </div>
        </div>
    );
}

export default NewsByCategory;