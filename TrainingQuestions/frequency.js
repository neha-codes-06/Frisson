let arr=[1,2,2,3,3,4,5,5,6,7]
function frequency(arr){
    const freq={}
    for(let i=0;i<arr.length;i++){
        if(freq[arr[i]]){
            freq[arr[i]]++
            
        }
        else{
            freq[arr[i]]=1
        }
        
    }
    return freq

}
console.log(frequency(arr))