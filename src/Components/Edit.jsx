import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context.jsx";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [products, setProducts] = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState({
    id: "",
    title: "",
    description: "",
    image: "",
    price: "",
    category: "",
  });

  // Load existing product
  useEffect(() => {
    const foundProduct = products.find((p) => String(p.id) === String(id));

    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id, products]);

  // Handle input change
  const ChangeHandler = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  // Update product
  const UpdateProductHandler = (e) => {
    e.preventDefault();

    if (
      product.title.trim().length < 5 ||
      product.image.trim().length < 5 ||
      product.category.trim().length < 3 ||
      String(product.price).trim().length < 1 ||
      product.description.trim().length < 5
    ) {
      alert("No field must be empty and every field must have valid length.");
      return;
    }

    const updatedProducts = products.map((p) =>
      String(p.id) === String(id) ? product : p,
    );

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    navigate("/");
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={UpdateProductHandler}
        className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-10 flex flex-col gap-6"
      >
        <h1 className="text-3xl font-semibold text-gray-800 text-center">
          Edit Product
        </h1>

        <input
          type="url"
          placeholder="Image URL"
          name="image"
          className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 bg-gray-50"
          onChange={ChangeHandler}
          value={product.image}
        />

        <input
          type="text"
          placeholder="Product Title"
          name="title"
          className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 bg-gray-50"
          onChange={ChangeHandler}
          value={product.title}
        />

        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Category"
            name="category"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 bg-gray-50"
            onChange={ChangeHandler}
            value={product.category}
          />

          <input
            type="number"
            placeholder="Price"
            name="price"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 bg-gray-50"
            onChange={ChangeHandler}
            value={product.price}
          />
        </div>

        <textarea
          rows="4"
          placeholder="Product Description"
          name="description"
          className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 bg-gray-50 resize-none"
          onChange={ChangeHandler}
          value={product.description}
        />

        <button
          type="submit"
          className="mt-2 py-3 rounded-lg bg-blue-600 text-white text-lg font-medium hover:bg-blue-700 transition"
        >
          Update Item
        </button>
      </form>
    </div>
  );
};

export default Edit;
