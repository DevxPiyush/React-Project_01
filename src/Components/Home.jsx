import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context.jsx";
import Loading from "./Loading.jsx";
import { api } from "../utils/Axios.jsx";

const Home = () => {
    const [products] = useContext(ProductContext);
    const { search } = useLocation();

    // ✅ FIXED CATEGORY EXTRACTION
    const category = search
        ? decodeURIComponent(search.split("=")[1])
        : null;

    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (category) {
            // getproductcategory();
            setFilteredProducts(products.filter(p => p.category == category ))

        } else {

            setFilteredProducts(products);
        }
    }, [category, products]);

    if (!products || products.length === 0) {
        return <Loading />;
    }

    return (
        <div className="flex flex-wrap gap-8 content-start">
            {filteredProducts.map((item) => (
                <Link key={item.id} to={`/details/${item.id}`}>
                    <div className="hover:scale-105 transition duration-200 h-[260px] w-[220px] bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center cursor-pointer">
                        <div
                            className="w-full h-[75%] bg-contain bg-no-repeat bg-center mb-3"
                            style={{ backgroundImage: `url(${item.image})` }}
                        />
                        <h1 className="text-sm font-medium text-gray-700 truncate">
                            {item.title}
                        </h1>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Home;