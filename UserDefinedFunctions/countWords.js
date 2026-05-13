let str="I am Neha";
function countWords(str){
    let count=0;
    let result=[]
    let word=""
    for(let i=0;i<str.length;i++){
        // console.log(str[i])
        if(str[i]!==" "){
            word+=str[i]
        }
        else{
            result.push(word)
            word=""
            count++
            console.log(result)
        }
    }
    result.push(word)
    console.log(result)
    count++
    return count

}
console.log(countWords(str))