function removeDublicates(arr) {
  let newArr = [...new Set(arr)]; // Convert Set back to an array
  return newArr;
}

arr = [1,1,5,6,5,4,7,89,1,0,12,15,10]
console.log(removeDublicates(arr))
