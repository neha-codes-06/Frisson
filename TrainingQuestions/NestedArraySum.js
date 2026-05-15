// 12. Nested Array Sum
// [1,[2,[3,4]],5] → 15

let arr=[1,[2,[3,4]],5];
function nestedsum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            sum+=nestedsum(arr[i])
            
        }
        else{
            sum+=arr[i]
            // console.log(sum[i])
        }
    }
    return sum


}
console.log(nestedsum(arr))

// output= 15