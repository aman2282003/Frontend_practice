const products = [
  { name: "Laptop", category: "Electronics", stock: 50, pricePerUnit: 1000 },
  { name: "Phone", category: "Electronics", stock: 150, pricePerUnit: 500 },
  { name: "T-shirt", category: "Clothing", stock: 40, pricePerUnit: 20 },
  { name: "Jeans", category: "Clothing", stock: 90, pricePerUnit: 40 },
  { name: "Watch", category: "Accessories", stock: 70, pricePerUnit: 150 },
];


const result = products
  // Step 1: Filter low-stock products (stock < 100)
  .filter((product) => product.stock < 100)
  // Step 2: Map to calculate the total reorder cost for each product
  .map((product) => {
    const reorderQuantity = 100 - product.stock;
    const reorderCost = reorderQuantity * product.pricePerUnit;
    return { category: product.category, reorderCost };
  })
  // Step 3: Group by category and sum reorder costs
  .reduce((acc, { category, reorderCost }) => {
    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category] += reorderCost;
    return acc;
  }, {});
// Step 4: Sort categories by total reorder cost in descending order
const sortedResult = Object.entries(result)
  .sort((a, b) => b[1] - a[1]) // Sort by reorder cost (value)
  .reduce((acc, [category, reorderCost]) => {
    acc[category] = reorderCost;
    return acc;
  }, {});

console.log(sortedResult);