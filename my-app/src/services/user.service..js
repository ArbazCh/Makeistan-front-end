import API from "../api/axios.config";

const userLoginService = async (data) => {
  return await API.post(`/login`,{
    data,
  });
};
const userRegisterService = async (data) => {
  return await API.post("/register",{
      data,
  });
};

export { userLoginService, userRegisterService };