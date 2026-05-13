// 9. Swap Keys and Values
// {a:1, b:2} → {1:"a", 2:"b"}

// let swapObject={
//     a:1,
//     b:2
// }
// let result={}
// for(let key in swapObject){
//     result[swapObject[key]]=key;
//  }
// console.log(result)


// 7. Deep Merge Objects (Important)
// 7. Deep Merge Objects (Important)
// deepMerge(
//   {a:1, b:{c:2}},
//   {b:{d:3}}
// )

// {a:1, b:{c:2, d:3}}

// {a:1, b:{c:2, d:3}}

// let deepMerge=({a:1, 
//    b:{c:2}},
//   {b:{d:3}})
// for(let key in deepMerge){
//     console.log(key)
// }

//3
// 1. Remove Duplicates
// [5,2,2,4,4,6,5,4,2,1,9,4] 
// let arr=[5,2,2,4,4,6,5,4,2,1,9,4] 
// function removeDuplicate(arr){
//     let result={}
//     let output=[]
//     for (let i=0;i<arr.length;i++){
//         if(!result[arr[i]]){
//             result[arr[i]]=true
//             output.push(arr[i])
        
//         }
//     }
//     return output
// }
// console.log(removeDuplicate(arr))

//4
// Find Missing Number
// [1,2,4,5] → 3

let arr=[6,7,9,10]
function missingNum(arr){
    let n=arr.length+1;
    let total=(n*(n+1))/2
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum-total
    

}
console.log(missingNum(arr))

