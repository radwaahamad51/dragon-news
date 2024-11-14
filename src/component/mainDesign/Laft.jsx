import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Laft = () => {
    const [catagoris, setcategoris] = useState([]);
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then((res) => res.json())
            .then((data) => setcategoris(data.data.news_category
            ))
    }, []);

    return (
        <div>
            <h1 className="mb-4">All Caterogy({catagoris.length})</h1>
            <div className="flex flex-col gap-3">
                {
                    catagoris.map(category =>
                        <NavLink to={`/category/${category.category_id}`} className="btn" key={category.category_id}>
                            {category.category_name}
                        </NavLink>)
                }
            </div>
        </div>
    )
};
export default Laft