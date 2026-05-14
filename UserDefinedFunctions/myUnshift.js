/*
custom unshift without using built in method
This method adds a value at the first index of array
*/
let arr=[2,3,4,5,6]
let add=1
function myUnshift(arr,add){
    arr[0]=add
    return arr 

}
console.log(myUnshift(arr,add))

//output=1,2,3,4,5,6



