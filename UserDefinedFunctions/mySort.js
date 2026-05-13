let arr=[3,5,2,4,1];
function mySort(arr){
    // result=[]
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            let tempValue=arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=tempValue
            

            console.log(tempValue)

        }
        // else{
        //     tempValue=arr[i]
        //     result.push(tempValue)
        // }
        // 

    }
    return tempValue
}
console.log(mySort(arr))



// let arr=[1,2,4,5,5,6]
// arr[arr.length]=22
// console.log(arr)

// let str="i am neha"
// let newStr=str.replace("neha","niki")
// console.log(newStr)