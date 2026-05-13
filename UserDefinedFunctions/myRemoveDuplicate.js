let arr=[1,3,2,2,4,3,3,8,9,7]
function myRemoveDuplicates(arr){
    let result={}
    let output=[]

    for(let i=0;i<arr.length;i++){
        if(!result[arr[i]]){
            result[arr[i]]=true
            // console.log(result)
            output.push(arr[i])
        }  
    }
    return output
}
console.log(myRemoveDuplicates(arr))