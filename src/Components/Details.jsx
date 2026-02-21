import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from "react-router-dom";
import {api} from "../utils/Axios.jsx";
import Loading from "./Loading.jsx";

const Details = () => {
    const [product,setProduct] = useState([]);
    const {id} = useParams()
    console.log(id);
    const getProducts = async () => {
        const {data} =  await api.get(`/products/${id}`)
        setProduct(data);
    }

    useEffect(() => {
        getProducts();
    }, []);
    return product ? (
        <div className="ml-[8%] w-[80%] h-full flex overflow-y-hidden items-center m-auto bg-zinc-50 p-10">

            <div className="w-[900px] bg-white rounded-2xl shadow-lg p-10 flex gap-12">

                {/* Product Image */}
                <div className="w-1/2 flex items-center justify-center bg-zinc-100 rounded-xl p-6">
                    <img
                        src={`${product.image}`}
                        alt="product"
                        className="h-[350px] object-contain"
                    />
                </div>

                {/* Product Content */}
                <div className="w-1/2 flex flex-col justify-between">

                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">
                            {product.title}
                        </h1>

                        <h2 className="text-xl font-serif italic text-gray-500 mb-6">
                            {product.category}
                        </h2>
                        <h2 className="text-2xl font-semibold  text-blue-600 mb-6">
                            {product.price}
                        </h2>

                        <p className="text-gray-600 leading-relaxed">
                            {product.description}
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-8">
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition">
                            Edit
                        </button>

                        <button className="px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-400 transition">
                            Delete
                        </button>
                    </div>

                </div>

            </div>

        </div>
    ) : Loading();
}
export default Details