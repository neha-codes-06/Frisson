function chunk(arr,s){
    const result=[];
    for(let i=0;i<arr.length;i+=s){
        console.log(arr[i])
        result.push(arr.slice(i,));
        console.log(result)
        
    }
    return result;
}
console.log(chunk([1,2,3,4,5], 2));