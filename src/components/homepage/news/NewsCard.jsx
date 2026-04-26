import Image from "next/image";

const NewsCard = ({news}) => {
    return ( 
        <div>
            <div>
                <Image src={news.author.img} alt="News Author Image"
                width={30} height={30}
                ></Image>
            </div>
            <div></div>
        </div>
     );
}
 
export default NewsCard;