const Array = require("./array");


function main() {
  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3);

  //length: 1, capacity: 3

  console.log(arr);
  console.log(arr.ptr);
}

main();
