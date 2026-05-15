// let numbers=[12,3,2,44,13,11]
// function myMap(num){
//     return num*12

// }

// Array.prototype.myMap = function(numbers) {
//     return numbers*10

   
// }

// // console.log(arr1.myLength());


// console.log(numbers.myMap());


let num=[2,5,7,3,8,9,4,6,7,2,9]
function myFilter(num){
    let result=[]
    for(let i=0;i<num.length;i++){
        if(num[i]%2===0){
            result.push(num[i])
           
        }
    }
    return result

}
console.log(myFilter(num))


let num1=[4,6,6,4,3,2,8]
console.log(myFilter(num1))