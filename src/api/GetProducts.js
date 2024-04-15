import axios from "axios";

const getProducts = async () => {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products?limit=4"
    );
    const filteredData = response.data.map(
      ({ id, title, price, category, description, image }) => ({
        id,
        title,
        price,
        category,
        description,
        image,
      })
    );
    return filteredData; // Return filtered data
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return empty array on error
  }
};

export default getProducts;
