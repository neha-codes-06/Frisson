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