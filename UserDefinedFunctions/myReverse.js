let str="javascript";
function myReverse(str){
    let result="";
    for(let i=str.length-1;i>=0;i--){
        // console.log(i)
        result=result+str[i]
        }
        return result

}
console.log(myReverse(str))