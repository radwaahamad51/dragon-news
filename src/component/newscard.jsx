import { FaEye } from "react-icons/fa";
const NewsCard = ({ news }) => {
    console.log(news)
    return (
        <div className=" mx-auto bg-white border border-gray-200 rounded-lg shadow-md p-4">
            {/* Card Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img
                        src={news.image_url}
                        alt="author"
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-3">
                        <h4 className="text-sm font-semibold">{news.author.name}</h4>
                        <p className="text-xs text-gray-500">{news.author.published_date}</p>
                    </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                    <i className="fas fa-share-alt"></i>
                </button>
            </div>

            {/* Title */}
            <h2 className="mt-4 text-lg font-semibold text-gray-800">
                {news.title}
            </h2>

            {/* Image */}
            <img
                src={news.image_url}
                alt="news"
                className="w-full h-48 rounded-lg mt-4 object-cover"
            />

            {/* Details */}
            <p className="mt-4 text-sm text-gray-600">
               {news.details.slice(0,150)}...{" "}
                <span className="text-orange-500 ml-1 cursor-pointer">Read More</span>
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center mt-4">
                <div className="flex items-center text-yellow-500">
                    <i className="fas fa-star mr-1"></i>
                    <span>{news.rating.number}</span>
                </div>
                <div className="text-gray-500 text-sm">
                    <span className="flex gap-5"><FaEye /> {news.total_view
                    }</span>
                </div>
            </div>
        </div>
    )
};

export default NewsCard