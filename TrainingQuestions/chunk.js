//  Chunk Array
// chunk([1,2,3,4,5], 2)



// without using slice method
// function chunk(arr,s){
//     const result=[];
//     for(let i=0;i<arr.length;i+=s){
//         console.log(arr[i])
//         result.push(arr.slice(i,));
//         console.log(result)
        
//     }
//     return result;
// }
// console.log(chunk([1,2,3,4,5], 2));

// output=[[1,2],[3,4],[5]]


function chunk(arr,s){
    const result=[];
    for(let i=0;i<arr.length;i+=s){
        // console.log(arr[i])
        let arr1=[]
        for(let j=i;j<arr.length;j++){
            if(j<i+s){
            
            arr1.push(arr[j])
            console.log(arr1)
        }
    }
        result.push(arr1)
        // console.log(result)
        
    }
    return result;
}
console.log(chunk([1,2,3,4,5], 2));