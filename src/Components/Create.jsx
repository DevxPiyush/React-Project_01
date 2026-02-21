import React, { useState } from "react";

const Create = () => {
    const [title, settitle] = useState("");
    const [image, setimage] = useState("");
    const [category, setcategory] = useState("");
    const [price, setprice] = useState("");
    const [description, setdescription] = useState("");

    const AddProductHandler = (e) => {
        e.preventDefault();
        const product = {
            title,image,category,price,description
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ title, image, category, price, description });
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gray-50">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-10 flex flex-col gap-6"
            >
                <h1 className="text-3xl font-semibold text-gray-800 text-center">
                    Add a New Product
                </h1>

                {/* Image */}
                <input
                    type="url"
                    placeholder="Image URL"
                    className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                    onChange={(e) => setimage(e.target.value)}
                    value={image}
                />

                {/* Title */}
                <input
                    type="text"
                    placeholder="Product Title"
                    className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                    onChange={(e) => settitle(e.target.value)}
                    value={title}
                />

                {/* Category + Price */}
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Category"
                        className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                        onChange={(e) => setcategory(e.target.value)}
                        value={category}
                    />

                    <input
                        type="number"
                        placeholder="Price"
                        className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                        onChange={(e) => setprice(e.target.value)}
                        value={price}
                    />
                </div>

                {/* Description */}
                <textarea
                    placeholder="Product Description..."
                    rows="4"
                    className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 resize-none"
                    onChange={(e) => setdescription(e.target.value)}
                    value={description}
                ></textarea>

                {/* Button */}
                <button
                    type="submit"
                    className="mt-2 py-3 rounded-lg bg-blue-600 text-white text-lg font-medium hover:bg-blue-700 transition duration-300"
                >
                    Create Item
                </button>
            </form>
        </div>
    );
};

export default Create;