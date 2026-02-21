import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context.jsx";

const Details = () => {
    const [products, setProducts] = useContext(ProductContext);
    const { id } = useParams();
    const navigate = useNavigate();

    // Find product directly (no useEffect needed)
    const product = products.find(
        (p) => String(p.id) === String(id)
    );

    const productDeleteHandler = () => {
        const updatedProducts = products.filter(
            (p) => String(p.id) !== String(id)
        );

        setProducts(updatedProducts);
        localStorage.setItem("products", JSON.stringify(updatedProducts));

        navigate("/"); // Redirect to home
    };

    if (!product) {
        return (
            <div className="flex justify-center items-center h-screen text-xl">
                Product not found
            </div>
        );
    }

    return (
        <div className="ml-[8%] w-[80%] min-h-screen flex items-center m-auto bg-zinc-50 p-10">
            <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg p-10 flex gap-12">

                {/* Product Image */}
                <div className="w-1/2 flex items-center justify-center bg-zinc-100 rounded-xl p-6">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="h-[350px] object-contain"
                    />
                </div>

                {/* Product Details */}
                <div className="w-1/2 flex flex-col justify-between">

                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">
                            {product.title}
                        </h1>

                        <h2 className="text-xl italic text-gray-500 mb-4">
                            {product.category}
                        </h2>

                        <h2 className="text-2xl font-semibold text-blue-600 mb-6">
                            ₹ {product.price}
                        </h2>

                        <p className="text-gray-600 leading-relaxed">
                            {product.description}
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-8">
                        <button
                            onClick={() => navigate(`/edit/${product.id}`)}
                            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition"
                        >
                            Edit
                        </button>

                        <button
                            onClick={productDeleteHandler}
                            className="px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-400 transition"
                        >
                            Delete
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Details;