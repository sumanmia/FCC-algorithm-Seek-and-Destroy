function destroyer(arr) {
  // Remove all the value
  let param = Array.from(arguments);
  let optional = param.splice(1);

  return arr.filter(num => optional.indexOf(num) === -1);
}

//destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
