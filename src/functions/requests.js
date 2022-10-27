import { Navigate } from "react-router-dom";
import API from "../config";

const getUserInfo = setState => {
  fetch(API.userInfo, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      authorization: localStorage.getItem("token"),
    },
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(result => setState(result.data));
};

const getDetail = (id, setState) => {
  fetch(`${API.getProduct}/${id}`)
    .then(response => response.json())
    .then(data => {
      setState({
        ...data.product,
        images: [
          { id: "thumbnail", url: data.product.thumbnail },
          ...data.product.images,
        ],
      });
    });
};

const addWishList = (productId, success) => {
  fetch(`${API.wishlist}?productId=${productId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      authorization: localStorage.getItem("token"),
    },
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("로그인이 필요합니다.");
      }
    })
    .then(success)
    .catch(error => alert(error));
};

const getWishList = setState => {
  fetch(API.wishlist, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      authorization: localStorage.getItem("token"),
    },
  })
    .then(response => response.json())
    .then(data => setState(data.getWishlist));
};

const deleteWishList = productId => {
  fetch(`${API.deleteWishlist}?productId=${productId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      authorization: localStorage.getItem("token"),
    },
  }).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("로그인이 필요합니다.");
    }
  });
};

const addToCart = (id, success) => {
  fetch(API.cart, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      productOptionId: id,
      quantity: 1,
    }),
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("로그인이 필요합니다.");
      }
    })
    .then(success)
    .catch(error => alert(error));
};

const getCart = setState => {
  fetch(API.cart, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      authorization: localStorage.getItem("token"),
    },
  })
    .then(response => response.json())
    .then(data => {
      setState(data.getCart);
    });
};

const deleteCart = productOptionId => {
  fetch(`${API.deleteCart}?productOptionId=${productOptionId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      authorization: localStorage.getItem("token"),
    },
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("로그인이 필요합니다.");
      }
    })
    .catch(error => alert(error));
};

const changeProductQuantity = (productOptionId, quantity) => {
  fetch(
    `${API.cartChangeQuantity}?productOptionId=${productOptionId}&quantity=${quantity}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        authorization: localStorage.getItem("token"),
      },
    }
  ).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("로그인이 필요합니다.");
    }
  });
};

const getPurchase = setState => {
  fetch(API.getPurchaseHistory, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      authorization: localStorage.getItem("token"),
    },
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("로그인이 필요합니다.");
      }
    })
    .then(result => setState(result.getOrders))
    .catch(error => {
      alert(error);
    });
};

const orderPayment = (totalPrice, success) => {
  fetch(API.payment, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      totalPrice,
    }),
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(success)
    .catch(error => alert(error));
};

const refundOrder = (orderId, totalPrice, success) => {
  fetch(API.refund, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      orderId: orderId,
      totalPrice: totalPrice,
    }),
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(success)
    .catch(error => alert(error));
};

export {
  getUserInfo,
  getDetail,
  addWishList,
  getWishList,
  deleteWishList,
  addToCart,
  getCart,
  deleteCart,
  changeProductQuantity,
  getPurchase,
  orderPayment,
  refundOrder,
};
