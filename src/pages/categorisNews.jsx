import { useLoaderData } from "react-router-dom";
import NewsCard from "../component/newscard";

const CategorisNews = () => {
    const { data: news } = useLoaderData();
    console.log(news)
    return (
        <div>
            <h1>Dragon News Home</h1>
            <div>
                {
                    news.map((singleNews) => (<NewsCard key={singleNews._id} news={singleNews} ></NewsCard>))
                }
            </div>

        </div>
    )
};
export default CategorisNews;