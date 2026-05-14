/*
custom push function
This method adds a new element at the end of the array and return the new array with added element.
*/

let arr=[1,2,3,4]
let add=5;
// arr[arr.length]=add
// console.log(arr)
function myPush(arr,add){
   
        arr[arr.length]=add
        return arr
       
    
   

}
console.log(myPush(arr,add))