let arr=[3,8,4,7,9,1,6];
function mySort(arr){
  
    for(let j=0;j<arr.length;j++)
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            let tempValue=arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=tempValue
            

            

        }
    }
            
    return arr
}
console.log(mySort(arr))



// let arr=[1,2,4,5,5,6]
// arr[arr.length]=22
// console.log(arr)

// let str="i am neha"
// let newStr=str.replace("neha","niki")
// console.log(newStr)