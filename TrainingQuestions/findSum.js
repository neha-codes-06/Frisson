function findSum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum
}
console.log(findSum([2,3,4,20,33]))