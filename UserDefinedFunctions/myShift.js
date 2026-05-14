/*
custom shift without using built in method
This method remove the first index element of array
*/

let arr=[3,1,2,2,3,4,5]
function myShift(arr){
    let result=[];
    let value;
        for(let i=0;i<arr.length;i++){
            if(i===0){
                value=arr[0]
                continue
                
            }
        
            else{
               result.push(arr[i])
            }
        }
        return result
        return value


}
console.log(myShift(arr))

// output=3