import { createContext, useEffect, useState } from "react";
import { api } from "./Axios.jsx";

export const ProductContext = createContext();

const Context = (props) => {

    const [products, setproducts] = useState( JSON.parse(localStorage.getItem("products")) || []); // ✅ FIXED

    // const getproducts = async () => {
    //     try {
    //         const { data } = await api.get("/products");
    //         // console.log(data);
    //         setproducts(data);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };
    //
    // console.log(products);
    // useEffect(() => {
    //     getproducts();
    // }, []);



    return (
        <ProductContext.Provider value={[products, setproducts]}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default Context;