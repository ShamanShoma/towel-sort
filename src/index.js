module.exports = function towelSort (matrix) {
  if (matrix == [] || matrix == null) {
    return [];
  }

  let evenSubarray;
  let newArr = [];

  let evenSubarrays = matrix.filter((_, index) => index %2 != 0);

  for (evenSubarray of evenSubarrays) {
    evenSubarray = evenSubarray.reverse();
  }

  for (let subArr of matrix) {
    for (let elem of subArr) {
      newArr.push(elem);
    } 
  }

  return newArr;
}
