const BASE_URL = "http://10.58.52.58:3000";

const API = {
  login: `${BASE_URL}/users/signin`,
  signup: `${BASE_URL}/users/signup`,
  addToCart: `${BASE_URL}/carts`,
  getCart: `${BASE_URL}/carts/a`,
  deleteOne: `${BASE_URL}/carts/deleteone`,
};

export default API;
