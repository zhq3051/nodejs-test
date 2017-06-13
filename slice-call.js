var numbers = ["aa",1,2,3];
console.log(Array.prototype.slice.call(numbers, 1));
console.log(Array.prototype.slice.call(numbers, 1,3));
console.log(Array.prototype.slice.call(numbers, 1,4));
console.log(Array.prototype.slice.call(numbers, 0,4));