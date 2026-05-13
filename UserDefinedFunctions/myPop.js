let arr=[1,2,3,4,5,8,9,10,10]
function myPop(arr){
    let result=[]
    let output;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==arr[arr.length-1]){
            // console.log(arr[-1])
            result.push(arr[i])
            
        }
        else{
            output=arr[arr.length-1]
            continue
            
        }
    }  
    return result
    // return output
    

}
console.log(myPop(arr))


// let arr=[1,2,3,4,5,5]
// arr.pop()
// console.log(arr)