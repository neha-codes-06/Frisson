// 1. Remove Duplicates
// [1,2,2,3,4,4] → [1,2,3,4]

let arr=[1,2,2,3,4,4]
function removeDuplicates(arr){
    let object={}
    let result=[]
    
    for(let i=0;i<arr.length;i++){
        if(!object[arr[i]]){
            object[arr[i]]=true;
            // console.log(object[arr[i]])
            result.push(arr[i])    
        }
    }
    return result
}
console.log(removeDuplicates(arr))

//output=