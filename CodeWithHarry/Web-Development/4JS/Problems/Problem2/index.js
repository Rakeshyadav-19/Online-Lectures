// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

let arr = [1, 2, 3, 5, 6, 6];

let double = (arr) => {
  return arr.map((v, i) => {
    if (v == arr[i + 1]) {
      return v;
    } else {
      return v * v;
    }
  });
};

let x = double(arr);
console.log(x);
