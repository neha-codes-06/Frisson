// let num=[2,3,4,5,6,7]
// function myMap(){

// }
// let numbers = [65, 44, 12, 4];
// function myMap(numbers) {
//   return numbers*10;
// }
// console.log(myMap(numbers))


let arr=[1,3,4,5,6,7];
let result=[]


function multiply(num){
  return num*4
  
}
for(let i=0;i<arr.length;i++){
  result.push(multiply(arr[i]))
}

console.log(result)