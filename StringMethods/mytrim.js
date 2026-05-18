let str="     hello world    "
function myTrim(str){
    let output=""
    let result=[]
    let word=""
    for(let i=0;i<str.length;i++){
        if(str[i]!==" "){
            word+=str[i]
            // console.log(word)

        }
        else{
            if(word!==""){
                result.push(word)
                word=""

            }
            
        }
    }
    // return result
    for(let i=0;i<result.length;i++){
        if(result[i]!==",")
        output+=result[i]+" "

    }
    return output

}
console.log(myTrim(str))