/*
custom split function
This function split the given string into an array of words and return the new array.
*/
let str="Neha Sundriyal"
function mySplit(str){
    let result=[];
    let word=""
    for(let i=0;i<str.length;i++){
        if(str[i]!==" "){
            word+=str[i]
        }
        else{
            result.push(word)
            word=""
        }
    }
    result.push(word)
    return result
}
console.log(mySplit(str))

//output=[ 'Neha', 'Sundriyal' ]