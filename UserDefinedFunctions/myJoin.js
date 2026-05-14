/*
custom join function
This function join the elements of an array and return a string.
*/

let arr=["n","e","h","a"]
function myJoin(arr){
    let result='';
    for(let i=0;i<arr.length;i++){
        // console.log(arr[i])
        result+=arr[i]   
    }
    
    return result
    

}
console.log(myJoin(arr))

// let name="nehaa";
// console.log(name)

//output=neha

 