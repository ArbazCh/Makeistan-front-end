import API from "../api/axios.config";
const  getAllProductService = async () =>{

    return await API.get(`/products`)
}

export { getAllProductService};