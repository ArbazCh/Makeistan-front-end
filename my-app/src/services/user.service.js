import API from "../api/axios.config";

const loginUserService = async (data) => {
  // console.log("data: ", data);
  const { email, password } = data;

  return await API.post("/login", {
    email,
    password,
  });
};

export { loginUserService };
