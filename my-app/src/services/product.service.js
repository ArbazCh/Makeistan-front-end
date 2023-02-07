import API from "../api/axios.config";

const getProductService = async (id) => {
  return await API.get(`/product/${id}`);
};
const getAllProductService = async () => {
  // console.log('here')
   const result=await API.get("/product");
  //  console.log('here',result)
   return result
};

export { getProductService, getAllProductService };
