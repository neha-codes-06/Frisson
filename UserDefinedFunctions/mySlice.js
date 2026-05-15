let arr=[1,2,3,4,5,6]
let start=1
let end=4
function mySlice(arr,start,end){
    let removedValue=[]
    for(let i=start;i<end;i++){
        removedValue.push(arr[i])

        
    }
    return removedValue
    
}
console.log(mySlice(arr,start,end))


//output=[2,3,4]


// let arr1=[1,2,3,4]
// console.log(arr1[3])
// let arr=[1,2,3,4,5,6]
// let start=1
// let end=4
// function mySlice(arr,start,end){
//     let removedValue=[]
//     for(let i=start;i<end;i++){
//         removedValue.push(arr[i])

        
//     }
//     return removedValue
    
// }
// console.log(mySlice(arr,start,end))