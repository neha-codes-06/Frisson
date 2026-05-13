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