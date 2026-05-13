let arr=[1,2,3,3,4,4,5,6,6]
function findDuplicates(arr){
    let output=[];
    let store={}
    for(let i=0;i<arr.length;i++){
        if(store[arr[i]]){
            store[arr[i]]++


        }
        else{
            store[arr[i]]=true
        }
    }
    for(let key in store){
        console.log(store[key])
        if(store[key]!==true){
            output.push(Number(key))
        }
    }
    return output
    
    
    


}
console.log(findDuplicates(arr))

// console.log(findDuplicate(arr))