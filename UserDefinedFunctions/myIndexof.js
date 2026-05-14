/*
in this method we are going to find the index of the given character in the string and return the index of the character
*/


let str="javascript";
let index="p";
function myIndexof(str,index){
    let result;
    for(let i=0;i<str.length;i++){
        if(str[i]===index){
            result=i


        }
    }
    return result


}
console.log(myIndexof(str,index))

//output=8