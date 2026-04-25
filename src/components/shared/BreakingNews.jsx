import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    // dummy data
    const breakingNews = [
  {
    "id": 1,
    "title": "Apple Unveils Next-Gen AI Chips for Faster On-Device Processing"
  },
  {
    "id": 2,
    "title": "Google Introduces New Gemini Features for Developers"
  },
  {
    "id": 3,
    "title": "Microsoft Expands Copilot Integration Across Windows 12"
  },
  {
    "id": 4,
    "title": "Tesla Reveals Breakthrough in Battery Efficiency Technology"
  },
  {
    "id": 5,
    "title": "OpenAI Launches Advanced Multimodal AI Capabilities"
  },
  {
    "id": 6,
    "title": "Meta Announces New AR Glasses for Everyday Use"
  },
  {
    "id": 7,
    "title": "Amazon Deploys AI Robots to Optimize Warehouse Operations"
  },
  {
    "id": 8,
    "title": "Samsung Introduces Rollable Display Smartphones"
  },
  {
    "id": 9,
    "title": "NVIDIA Releases Powerful GPU for AI and Gaming Performance"
  },
  {
    "id": 10,
    "title": "Cybersecurity Experts Warn of Rising AI-Driven Threats"
  }
]
    return ( 
        <div className="mt-4 container mx-auto flex items-center gap-4 p-3 bg-gray-200">
            <button className="btn bg-[#D72050] text-white">Latest</button>
            <Marquee pauseOnHover={true}>
                {
                    breakingNews.map(news=>
                        <span key={news.id} className="mx-6">{news.title}</span>
                    )
                }
            </Marquee>
        </div>
     );
}
 
export default BreakingNews;