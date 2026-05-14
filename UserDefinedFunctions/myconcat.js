/*
custom concat without using built in method
This method combines the two array;
*/

let arr1=[1,2,3,4]
let arr2=[5,6,7,8]
function myConcat(arr1,arr2){
    let result=[]
    result=[...arr1,...arr2]
    return result

}
console.log(myConcat(arr1,arr2))

//output=[1, 2, 3, 4, 5, 6, 7, 8]