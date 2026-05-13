let str="neha,bob,charlie";
function mySplitString(str){
    let result=[];
    let word=""   
    for(let i=0;i<str.length;i++){
        if(str[i]!==","){
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
console.log(mySplitString(str))
