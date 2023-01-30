import API from "../api/axios.config";

const getProductService = async (id) => {
  return await API.get(`https://api.escuelajs.co/api/v1/products/${id}`);
};

export default getProductService;
