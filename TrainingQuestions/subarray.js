// 4. Subarray with Given Sum (using object/map)
// [1,2,3,7,5], sum = 12 → [2,3,7]


let arr=[1,2,3,7,5];
function Subarraysum(arr,sum){
    for(let i=0;i<arr.length;i++){
        // console.log(arr[i])
        for(let j=i+1;j<arr.length;j++){
            // console.log(arr[j])
            
            for(let k=i+2;k<arr.length;k++){
                // console.log(arr[k])
                
            
            if(arr[i]+arr[j]+arr[k]===sum){
                return [arr[i],arr[j],arr[k]]
                
            }
                
            }
        }
    }
    
}
console.log(Subarraysum(arr,12))


// output=[2,3,7]