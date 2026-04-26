import Image from "next/image";
import { format } from "date-fns";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";

const NewsCard = ({ news }) => {
    return (
        <div>
            <div className="my-4 bg-gray-100 p-4 flex items-center justify-between">
                {/* author info */}
                <div className="flex items-center gap-3">
                    <Image src={news.author.img} alt="News Author Image"
                        width={40} height={40}
                        className="rounded-full"
                    ></Image>
                    <div className="flex flex-col justify-center">
                        <p className="text-[16px] font-semibold">{news.author.name}</p>
                        <p className="text-[16px] text-[#706F6F]">{format(new Date(), "yyyy-MM-dd")}</p>
                    </div>
                </div>

                {/* save share buttons */}
                <div className="flex items-center gap-2">
                    <CiBookmark size={20}></CiBookmark>
                    <CiShare2 size={20}></CiShare2>
                </div>
            </div>

            {/* news main body */}
            <div className="p-2 space-y-2">
                <h2 className="font-bold text-[20px]">{news.title}</h2>
                <Image src={news.image_url} alt={news.title}
                width={800} height={800}
                ></Image>
                <p className="text-[16px] text-justify line-clamp-4 font-semibold text-[#706F6F]">{news.details}</p>
                {/* can I take the click with Link to the news details page? */}
                <p className="text-[16px] text-orange-400 font-semibold">Read More</p>
            </div>

            {/* divider */}
            <div className="divider"></div>

            {/* review & insights */}
            <div className="p-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <IoIosStarOutline size={20}></IoIosStarOutline>
                    <p>{news.rating.number}</p>
                </div>
                <div className="flex items-center gap-2">
                    <FaEye size={20}></FaEye>
                    <p className="text-[16px]">{news.total_view}</p>
                </div>
            </div>
        </div>
    );
}

export default NewsCard;