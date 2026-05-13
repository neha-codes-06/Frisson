
let str="abcabcbb"
function longestStringWithoutRepeat(str){
    let longest="";
    let current="";
    for(let i=0;i<str.length;i++){
        if(!current.includes(str[i])){
            current+=str[i]
        }
        
    
    }
    return current
}

console.log(longestStringWithoutRepeat(str))