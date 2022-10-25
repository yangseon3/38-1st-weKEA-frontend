import { API } from "../config";

const getCart = setState => {
  fetch(API.getCart, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: 3,
    }),
  })
    .then(response => response.json())
    .then(data => setState(data.getCart));
};

const addToCart = () => {
  fetch(API.addToCart, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: 3,
      productOptionId: 1,
      quantity: 1,
    }),
  }).then(response => response.json());
};

const deleteItem = () => {
  fetch(API.deleteOne, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: 3,
      productOptionId: 1,
    }),
  }).then(response => response.json());
};

export { getCart, addToCart, deleteItem };
