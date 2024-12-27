arr = [
  {
    name: "product 1",
    price: 300,
  },
  {
    name: "product 2",
    price: 500,
  },
  {
    name: "product 3",
    price: 0,
  },
  {
    name: "product 4",
    price: 1200,
  },
];

function processProducts(arr) {
  arr.map(function (ele) {
    return ele;
  });

  arr.forEach((product) => {
     if (product.price > 50) {
       console.log(`${product.name} is above $50`);
     } else {
       console.log(`${product.name} is below $50`);
     }
  });

}


processProducts(arr);
