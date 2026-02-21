import React, {useContext} from 'react'
import {ProductContext} from "../utils/Context.jsx";
import {Link, useLocation} from "react-router-dom";

const Navigation = () => {
    const [product] = useContext(ProductContext);

    const {search, pathname} = useLocation()

    let distinct_category = product && product.reduce((acc,cv) => [...acc, cv.category], [])
    distinct_category = [...new Set(distinct_category)]
    // console.log(distinct_category);

    const color = () => {
        return `rgba(${Math.floor(Math.random()*255)},
        ${Math.floor(Math.random()*255)},
        ${Math.floor(Math.random()*255)},
        ${Math.floor(Math.random()*255)}
        )`
    }
    return (
        <nav className="w-[18%] h-screen bg-white shadow-md fixed left-0 top-0 p-8 flex flex-col gap-8">

            <a
                href="/create"
                className="px-5 py-3 bg-blue-600 text-white text-center rounded-xl hover:bg-blue-500 transition"
            >
                Add New Product
            </a>

            <hr />

            <h1 className="text-xl font-semibold text-blue-700">
                Category
            </h1>

            <div className="flex flex-col gap-4">
                {distinct_category.map((c,i) => (
                    <Link key={i} to={`/?category=${c}`} className="flex items-center gap-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                       <span
                           className="w-2 h-2 rounded-full"
                           style={{ backgroundColor: color() }}
                       ></span>
                        {c}
                    </Link>
                ))}
            </div>
            {(pathname!= "/" || search.length>0) && <Link to={`/`} className={`px-3 py-3 bg-red-400 w-[40%] text-center text-white font-semibold rounded-full`}> Go Home </Link> }

        </nav>
    )
}
export default Navigation
