/*
custom replace function
This function replace the given value with new value in the string and return the new string.
*/

let str="I am neha"
let replaceValue="neha"
let newValue="niki"
function myReplace(str,replaceValue,newValue){
    let result=""
    for(let i=0;i<str.length;i++){
        // console.log(str[i])
        if(str[i]===replaceValue){
            replaceValue=newValue
            console.log(replaceValue)
            result+=str[i]

        }
    }
    return result

}
console.log(myReplace(str))