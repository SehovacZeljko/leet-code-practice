// console.log('testing');

// const array1 = ["a", "s", "d", "f", "d"];
// const array2 = ["w", "p", "r", "s", "g"];

// function findDuble (arr1,arr2){

// for (let i = 0; i < arr1.length; i++) {
//    for (let j = 0; j < arr2.length; j++) {
//     if (arr1[i] === arr2[j]) {
//         return true
//     }

//    }

// }
// return false
// }

// this example has time complexity of BIG O(n*m)
//
//
// and it is not optimal solution for werry large input arrays,  so we should try to find better solution for this problem

const array1 = ["a", "s", "d", "f", "d"];
const array2 = ["w", "p", "r", "n", "g"];

function findDuble(arr1, arr2) {
  //convert array to an object
  let map = {};

  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
   //loop trough the secound array and check if we have that element in map object 


  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

console.log(findDuble(array1, array2));
