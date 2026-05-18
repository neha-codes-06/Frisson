let str="Apple,Mango"
let start=6
let end=11
function mySlice(str,start,end){
    let result=""
    for(let i=start;i<end;i++){
        
        result+=str[i]
    }
    return result


}
console.log(mySlice(str,start,end))