/*
in this question we can check the include character is present or not in given string
*/

let str="javascript";
let include="k";
function myIncludes(str,include){
    for(let i=0;i<str.length;i++){
        if(str[i]===include){
            return true
        }
    }
    return false
}
console.log(myIncludes(str,include))


//output=false