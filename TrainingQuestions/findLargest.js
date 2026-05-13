function findLargest(arr){
    let largest=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i]
        }
        else{
        }
    }
    return largest
    
}
console.log(findLargest([30,2,44,22,66]))