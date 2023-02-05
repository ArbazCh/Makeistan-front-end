import API from "../api/axios.config";

const getProductService = async (id) => {
  return await API.get(`/product/${id}`);
};
const getAllProductService = async () => {
  return await API.get("/product");
};

export { getProductService, getAllProductService };
