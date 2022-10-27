const BASE_URL = "http://10.58.52.155:3000";

const API = {
  login: `${BASE_URL}/users/signin`,
  signup: `${BASE_URL}/users/signup`,
  userInfo: `${BASE_URL}/users/userinfo`,
  cart: `${BASE_URL}/carts`,
  deleteCart: `${BASE_URL}/carts/one`,
  cartChangeQuantity: `${BASE_URL}/carts/change`,
  getProduct: `${BASE_URL}/products`,
  getList: `${BASE_URL}/categories`,
  wishlist: `${BASE_URL}/wishlist`,
  deleteWishlist: `${BASE_URL}/wishlist/one`,
  getPurchaseHistory: `${BASE_URL}/order`,
  payment: `${BASE_URL}/order/pay`,
  refund: `${BASE_URL}/order/refund`,
};

export default API;
