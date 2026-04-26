import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSIdeBar from "@/components/homepage/news/RightSIdeBar";
import { getCategory } from "@/services/services";

const Home= async()=> {
  const categories = await getCategory();

  return (
    <div className="container mx-auto mt-6 grid grid-cols-12 gap-6">
      <div className="col-span-3">
        <LeftSideBar 
        categories={categories}
        activeId={'04'}
        ></LeftSideBar>
      </div>

      <div className="col-span-6">
        <h2 className="font-semibold text-xl text-[#403F3F]">Dragon News Home</h2>
      </div>

      <div className="col-span-3">
        <RightSIdeBar></RightSIdeBar>
      </div>
    </div>
  );
}

export default Home;