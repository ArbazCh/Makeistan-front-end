import API from "../api/axios.config";

const loginUserService = async (data) => {
  // console.log("data: ", data);
  const { email, password } = data;

  return await API.post("/login", {
    email,
    password,
  });
};
const registerUserService = async (data) => {
  // console.log("data: ", data);
  const { email, password, firstName, lastName, address } = data;

  return await API.post("/register", {
    email,
    password,
    firstName,
     lastName,
      address
  });
};

export { loginUserService, registerUserService };
