import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context.jsx";
import Loading from "./Loading.jsx";

const Home = () => {
    const [products] = useContext(ProductContext);

    if (!products || products.length === 0) {
        return <Loading />;
    }

    return (
        <div className="flex flex-wrap gap-8 content-start">

            {products.map((item) => (

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