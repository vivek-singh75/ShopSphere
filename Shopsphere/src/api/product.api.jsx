import axios from "axios";

//const API_URL = "https://shopsphere-jue3.onrender.com";
const API_URL = "http://localhost:3000";


export const allProducts = async (
    limit = 10, skip = 0, maxPrice = null) => {

    const params = { limit, skip  };

    if (maxPrice !== null && maxPrice !== undefined) {
        params.maxPrice = maxPrice;
    }

    return await axios.get(
        `${API_URL}/api/products`,
        {
            params
        }
    );
};

export const productDetailsById = async ({productId}) => {
    
    try {
        const response = await axios.get(`${API_URL}/api/productById?id=${productId}`);

        return response

    } catch (error) {
        console.log(error.message)
        throw error
    }

}
