// 4. Subarray with Given Sum (using object/map)
// [1,2,3,7,5], sum = 12 → [2,3,7]

// give me all posibilities

let arr=[1,2,3,7,5,6,4];
function Subarraysum(arr,sum){
    result=[]
    for(let i=0;i<arr.length;i++){
       
        // console.log(arr[i])
        for(let j=i+1;j<arr.length;j++){
           

            // console.log(arr[j])
            
            for(let k=i+2;k<arr.length;k++){
                // console.log(arr[k])
                
            
            if(arr[i]+arr[j]+arr[k]===sum){
                result.push([arr[i],arr[j],arr[k]])
                
                // return [arr[i],arr[j],arr[k]]               
            }
                
            }
        }
    }
    return result
    
}
console.log(Subarraysum(arr,12))


output=[2,3,7]

