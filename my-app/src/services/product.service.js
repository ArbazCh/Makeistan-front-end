import API from "../api/axios.config";
<<<<<<< HEAD
const  getAllProductService = async () =>{

    return await API.get(`/products`)
}

export { getAllProductService};
=======

const getProductService = async (id) => {
  return await API.get(`/products/${id}`);
};
const getAllProductService = async () => {
  return await API.get("/products");
};

export { getProductService, getAllProductService };
>>>>>>> 0eb3a4fb083303a4fda9a090a49062b692f4f7c5
