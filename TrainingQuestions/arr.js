let arr = [-1,0,1,2,-1,-4]
function three(arr){
    let newArr = arr.sort((a,b)=>a-b)
    console.log(newArr)
    let result = []
    for(let i=0;i<arr.length-2;i++){
        let left = i+1
        let right  = arr.length-1
        
        if(i>0 && arr[i]===arr[i-1]){
            continue
        }
        
        while(left<right){
            total = arr[i]+arr[left]+arr[right]
            if(total === 0){
                result.push([arr[i],arr[left],arr[right]])
                left++
                right--
                while(left<right && arr[left]===arr[left-1]){
                    left++;
                    
                }
                while(left<right && arr[right]===arr[right+1]){
                    right++;
                }
            }
            else if(total<0){
                left++
            }
            else{
                right--
            }
        }
    }
    return result
}

console.log(three(arr));










