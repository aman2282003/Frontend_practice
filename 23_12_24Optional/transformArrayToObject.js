function transformArrayToObject(arr) {
  result = {};
  for (let i = 0; i < arr.length; i++) {
    result[arr[i]] = arr[i].length;
  }
  return result;
}

arr = ["apple", "banana", "cherry"];

console.log(transformArrayToObject(["apple", "banana", "cherry"]));
