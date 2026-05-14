/*
custom trim function
this function remove the spaces from the beginning and end of the string and return the new string.
*/

let str="     hello world     ";
function myTrim(str){
    let result=""
    let left=0;
    let right=str.length-1
    while(left<right){
        if(str[left]===" " &&str[right]===" "){
            
            left++
            right--
            continue

        }
        else{
            result+=str

        }
    }
    return result


}
console.log(myTrim(str))

//output="hello world"