// let arr=[1,50,30,7]
// let target=80;
// function sumTarget(arr){
   
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]===target){
//                 return [arr[i],arr[j]]
                
                
//                 // console.log(arr[i])
//                 // console.log(arr[j])
//                 // return arr[i],arr[j]
                
//             }
//         }
//     }
    
    
// }
// console.log(sumTarget(arr))


//second way
let arr=[1,50,30,7]
let target=80;
function sumTarget(arr,target){
    let result={}
    for(let i=0;i<arr.length;i++){
        let needed=target-arr[i]
        result[arr[i]]=i
        if(result[needed]){
            return [needed,arr[i]]
        }
      
    //   console.log(result)
    }
   
    
    
    
}
console.log(sumTarget(arr,target))