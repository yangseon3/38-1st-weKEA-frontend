const getCart = setState => {
  fetch("http://10.58.52.238:3000/carts/a", {
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
  fetch("http://10.58.52.238:3000/carts", {
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
  fetch("http://10.58.52.238:3000/carts/deleteone", {
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
