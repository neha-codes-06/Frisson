// 3. Find Missing Number
// [1,2,4,5] → 3

let arr=[1,2,4,5]
function missingNum(arr){
    let n=arr.length+1;
    let total=n*(n+1)/2
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return total-sum
}
console.log(missingNum(arr))

// output=3