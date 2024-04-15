import axios from "axios";

const getCategories = async () => {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    return response.data; // Returns the array of categories directly from Axios response
  } catch (error) {
    console.error("Error fetching categories:", error);
    return []; // Return empty array on error
  }
};

export default getCategories;
