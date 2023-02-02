import API from "../api/axios.config";

const getProductService = async (id) => {
  return await API.get(`/products/${id}`);
};
const getAllProductService = async () => {
  return await API.get("/products");
};

export { getProductService, getAllProductService };
