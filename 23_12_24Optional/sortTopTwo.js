function getTopTwo(arr) {
  // Sort the array in descending order
  const [first, second] = arr.sort((a, b) => b - a);
  // Return the top two numbers as an array
  return [first, second];
}

// Example usage:
const result = getTopTwo([10, 20, 30, 40]);
console.log(result); // Output: [40, 30]
