import API from "../api/axios.config";

const getProductService = async (id) => {
  return await API.get(`/product/${id}`);
};
const getAllProductService = async () => {
  // console.log('here')
  const res = await API.get("/product");
  // console.log(res.data);
  return res;
};

export { getProductService, getAllProductService };
